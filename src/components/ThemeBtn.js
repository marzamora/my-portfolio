import React from "react";
import { useEffect, useState } from "react";
import { setTheme, useTheme } from "../utils/theme";

const ThemeBtn = () => {
    
    let theme = localStorage.getItem('theme');

    const [buttonText, setButtonText] = React.useState('Dark mode')

    const toggleTheme = () => {
        if (localStorage.getItem('theme') === 'dark-mode') {
            setTheme('light-mode')
            setButtonText('Dark mode')
        } else {
            setTheme('dark-mode')
            setButtonText('Light mode')
        }
    }

    useEffect(() => {
        useTheme();
    })

    const classes = {theme} + " button"
    
    return (
        <>
            <button className={classes} type="button" onClick={toggleTheme}>
                {buttonText}
            </button>
        </>
    )
}

export default ThemeBtn;