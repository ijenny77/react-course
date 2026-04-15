import React, { useEffect } from "react";
import light_mode from '../assets/light_mode_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import dark_mode from '../assets/dark_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
function ThemeToggleBtn ({theme,setTheme}) { 
    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme',theme)
    },[theme]);
    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light' ))
    },[])
    return (
        <>
            <button>
                {theme === 'dark' ? (
                    <img onClick={() => setTheme("light")} src={light_mode} alt="light" className="size-8.5 p-1.5 border border-gray-500 rounded-full" />
                ) : (
                    <img onClick={() => setTheme("dark")}  src={dark_mode} alt="dark" className="size-8.5 p-1.5 border border-gray-500 rounded-full" />
                )}
            </button>
        </>
    )
}
export default ThemeToggleBtn