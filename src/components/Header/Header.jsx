import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import "./Header.css"
const Header = () => (
<div className="Header">
    <a href="#" className="logo">InnoMarvel</a>
    <nav className="navigation">
        <ul className="navigation__list">
            <li className="navigation__item"><a href="">Comics</a></li>
            <li className="navigation__item"><a href="">Characters</a></li>
        </ul>
        <SearchBar/>
    </nav>
    
</div>
)
export default Header;