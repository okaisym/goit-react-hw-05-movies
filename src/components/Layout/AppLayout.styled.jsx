import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.nav`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 40px;
`;

export const Header = styled.header`
  background-color: #7cb9e8;
  padding: 20px 0 20px 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0.2, 0.1);
  margin-bottom: 35px;
`;
export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 25px;
  font-weight: 600;
  border: 2px solid #fff;
  padding: 6px 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #7cb9e8;
  }

  transition: background-color 0.6s ease;
`;
