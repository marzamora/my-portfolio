import React from "react";
import { useEffect, useState } from "react";
import { setTheme, useTheme } from "../utils/theme";

const ThemeBtn = () => {
    
    const [toggle, setToggle] = useState('dark');
    let theme = localStorage.getItem('theme');

    const toggleTheme = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light')
            setToggle('light')
        } else {
            setTheme('theme-dark')
            setToggle('dark')
        }
    }

    useEffect(() => {
        useTheme();
    })

    const classes = {theme} + " button"
    
    return (
        <>
            <button className={classes} type="button" onClick={toggleTheme}>{toggle} mode</button>
        </>
    )
}

export default ThemeBtn;