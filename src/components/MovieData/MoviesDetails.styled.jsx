import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MoviesDetailsContainer = styled.div`
display: flex;
padding: 50px;
gap: 30px;`

export const MovieTitle = styled.h1`
margin: 0px;
color: #0076CE;`

export const Title = styled.h2`
margin: 5px 0px 0px 0px;
color: #7cb9e8;`

export const ListDetails = styled.ul`
display: flex;
gap: 30px;
padding: 0px;
list-style: none;`

export const DetailsNavLink = styled(NavLink)`
text-decoration: none;`