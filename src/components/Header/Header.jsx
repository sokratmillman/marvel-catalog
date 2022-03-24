import React from "react";

import SearchBar from "../SearchBar/SearchBar"
import { StyledLogo, StyledHeader, StyledNavLink, StyledNavBar, StyledNavList, StyledNavItem } from "./Header.styles";

const Header = () => (
    <StyledHeader>
        <StyledLogo to="/">Innomarvel</StyledLogo>
        <StyledNavBar>
            <StyledNavList>
            <StyledNavItem><StyledNavLink to="/comics">Comics</StyledNavLink></StyledNavItem>
                <StyledNavItem><StyledNavLink to="/characters">Characters</StyledNavLink></StyledNavItem>
            </StyledNavList>
            <SearchBar/>
        </StyledNavBar>
        
    </StyledHeader>
)
export default Header;