import { Route, Routes, Navigate } from 'react-router-dom';
import { AppLayout } from '../Layout/AppLayout';
import MoviesPage from '../../pages/MoviesPage';
import HomePage from '../../pages/HomePage/HomePage';
import Cast from '../Cast/Cast'
import Reviews from '../Review/Review';
import MoviesDetailsPage from '../../pages/MoviesDetailsPage'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />}></Route>
      <Route path="/movies" element={<MoviesPage />}></Route>
      <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
        <Route path="cast" element={<Cast/>}></Route>
        <Route path="reviews" element={<Reviews/>}></Route>
      </Route>
      </Route>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
};
