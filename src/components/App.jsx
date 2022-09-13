import { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { SharedLayout } from './SharedLayout/SharedLayout';
import s from "./App.module.css";

const Home = lazy(() => import("./Home/Home"));
const Movies = lazy(() => import("./Movies/Movies"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const NotFound = lazy(() => import("./NotFound/NotFound"));

export const App = () => {
  return (
    <div className={s.container}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />} >
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
         </Route>
      </Routes>
      {/* <ToastContainer autoClose={3000} /> */}
    </div>
  );
};
