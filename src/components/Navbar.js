import React from 'react';
import {Link} from "react-router-dom";
import {SearchBar} from "./SearchBar";
import {useTheme} from "../hooks/useTheme";

import './Navbar.css'


export const Navbar = () => {
    const { color } = useTheme()

    return (
        <div className="navbar" style={{ background: color}}>
            <nav>
                <Link className="brand" to="/"><h1>Cooking Master</h1></Link>
                <SearchBar/>
                <Link to="/create">Create New Recipe</Link>
            </nav>
        </div>
    );
};

