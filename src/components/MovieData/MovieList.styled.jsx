import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieListTitle = styled.h2`
color: #6495ED;
font-size: 18px;
`

export const MovieListElement = styled.ul`
list-style: none;
display: flex;
gap: 20px 15px;
flex-wrap: wrap;
justify-content: center;
padding: 0px;`

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const MovieListItem = styled.li`
  margin: 10px;
`;

export const MoviePoster = styled.img`
width: 100%;
  height: auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

export const MovieCard = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  text-align: center; 
  margin: 0 auto;
`