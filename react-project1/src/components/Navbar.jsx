import React, { useState } from "react";
import menu_icon_dark from '../assets/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import menu_icon_light from '../assets/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import dark_logo from '../assets/image-removebg-preview (1).png'
import light_logo from '../assets/image_copy-removebg-preview.png'
import cross from '../assets/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import arrow from '../assets/arrow_forward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import ThemeToggleBtn from "./ThemeToggleBtn";
function Navbar({theme,setTheme}) {
    const [sidebarOpen,setSidebarOpen] = useState(false)
    return(
        <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 ">
            <img src={theme === 'dark' ? dark_logo : light_logo} alt="logo" className=" w-32 sm:w-40" />

            <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' :'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 
            max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

                <img src={cross} alt="" className="w-5 absolute right-4 top-4 sm:hidden" onClick={()=> setSidebarOpen(false)} />
                <a onClick={() => setSidebarOpen(false)} href="#" className="sm:hover:border-b">Home</a>
                <a onClick={() => setSidebarOpen(false)} href="#services" className="sm:hover:border-b">Services</a>
                <a onClick={() => setSidebarOpen(false)} href="#our-work" className="sm:hover:border-b">Our Work</a>
                <a onClick={() => setSidebarOpen(false)} href="#contact-us" className="sm:hover:border-b">Contact us</a>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
                <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
                <img src={theme === 'dark' ? menu_icon_light : menu_icon_dark} onClick={()=> setSidebarOpen(true)} alt="menu icon" className="w-8 sm:hidden" />
                <a href="#contact-us" className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all">
                    Connect <img src={arrow} alt="" />
                </a>
            </div>
        </div>
    )
}
export default Navbar