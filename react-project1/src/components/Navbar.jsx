import React from "react";
import dark_logo from '../assets/image-removebg-preview (1).png'
import light_logo from '../assets/image copy.png'
function Navbar({theme,setTheme}) {
    return(
        <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 ">
            <img src={theme === 'dark' ? dark_logo : light_logo} alt="logo" className="w-32 sm:w-40" />
        </div>
    )
}
export default Navbar