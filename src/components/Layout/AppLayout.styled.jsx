import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.nav`
display: flex;
list-style: none;
align-items: center;
gap: 40px;
`
export const Header = styled.header`
background-color: #7CB9E8;
padding: 20px 0 20px 50px;
box-shadow: 0 4px 8px rgba(0, 0, 0.2, 0.1);
`
export const StyledNavLink = styled(NavLink)`
color: white;
text-decoration: none;
font-size: 15px;
font-weight: 700;
`