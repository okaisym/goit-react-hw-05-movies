import { Route, Routes, Navigate } from 'react-router-dom';
import { AppLayout } from '../Layout/AppLayout';
import { lazy } from 'react';

const MoviesPage = lazy(() => import('../../pages/Movies/MoviesPage')) ;
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const Cast = lazy(() => import('../Cast/Cast')); 
const Reviews = lazy(() => import('../Review/Review')) ;
const MoviesDetailsPage = lazy(() => import('../../pages/Movies/MoviesDetailsPage')); 

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />}/>
      <Route path="/movies" element={<MoviesPage />}/>
      <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
        <Route path="cast" element={<Cast/>}/>
        <Route path="reviews" element={<Reviews/>}/>
      </Route>
      </Route>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
};
