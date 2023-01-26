import React from 'react';
import './RecipeList.css'
import {Link} from "react-router-dom";
import {useTheme} from "../hooks/useTheme";
import trashcan from '../assets/trashcan.svg'
import { projectFirestore } from "../firebase/config";

export const RecipeList = ({recipes}) => {
    const {mode} = useTheme()


    if (recipes.length === 0) {
        return (
            <div className="error">No recipes found..</div>
        )
    }
    const handleClick = (id) => {
        projectFirestore.collection('recipes').doc(id).delete()
    }

    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <div className={`card ${mode}`} key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                    <img
                        className="delete"
                        src={trashcan}
                        onClick={() => handleClick(recipe.id)}
                    />
                </div>
            ))}
        </div>
    );
};
