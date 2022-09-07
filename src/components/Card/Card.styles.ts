import styledComponents from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledCard = styledComponents.div`
    width: 700px;
    height: 300px;
    padding: 25px;
    display: flex;
    justify-content: flex-start ;
    background-color: rgba(0, 0, 0, 0.8);
    margin: 20px 0 10px;
`;

export const StyledImageField = styledComponents.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 250px;
    height: 250px;
    border: 1px solid white;
    margin-right: 50px;
`;

export const StyledImage = styledComponents.img`
    width: 100%;
`;

export const StyledInfoField = styledComponents.div`
    width: 500px;
    color: #FFE454;
`;

export const StyledLink = styledComponents(NavLink)`
    color: #FFE454;
`;
