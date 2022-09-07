import { NavLink } from 'react-router-dom';
import styledComponents from 'styled-components';

export const StyledLogo = styledComponents(NavLink)`
    font-size: 24px;
    margin-left: 50px;
    color: #FFE454;
    text-decoration: none;
`;

export const StyledHeader = styledComponents.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    background-color: #000;
    color: #FFE454;
    padding: 0px;
    align-items: center;
    width: 100%;
`;

export const StyledNavLink = styledComponents(NavLink)`
    font-family: Roboto;
    font-weight: 600;
    text-decoration: none;
    color: #FFE454;
    margin: 5px;
    padding: 40% 10px;
    display: block;
`;

export const StyledNavItem = styledComponents.li`
    display: flex;
    align-items: center;
    
    height: 100%;
    background-color: #342929;
    margin: 0px 10px;
    
    &:hover{
        background-color: #a19238;
    }
`;
export const StyledNavList = styledComponents.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    height: 100%;
    padding: 0px;
    margin: 0px;
`;

export const StyledNavBar = styledComponents.nav`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    margin-right: 50px;
`;
