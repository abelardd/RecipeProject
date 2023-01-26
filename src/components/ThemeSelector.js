import React from 'react';
import { useTheme } from "../hooks/useTheme";
import lightdark from '../assets/lightdark.svg'

import './ThemeSelector.css'

const themeColors = ['#58249c', '#249c6b', '#b70233']

export const ThemeSelector = () => {
    const { changeColor, changeMode, mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    console.log(mode)



    return (
        <div className="theme-selector">
            <div className="mode-toggle">
                <img
                    onClick={toggleMode}
                    src={lightdark}
                    alt="dark/light toogle icon"
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
                />
            </div>
            <div className="theme-buttons">
                {themeColors.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{background: color}}
                    />
                ))}
            </div>

        </div>
    );
};
