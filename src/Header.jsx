function Header(){
    return(
        <header>
            <h1>My website</h1>
            <nav className="navbar">
                <ul className="navbarlist">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header