import { Link, Outlet, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieDetails } from "services/movieApi";
import { Loader } from "components/loader/loader";
import { HiArrowLeft } from "react-icons/hi";
import s from "./MovieDetails.module.css";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/movies';

    useEffect(() => {
        const fetchMovieDetailsId = async () => {
            setLoading(true);
            try {
               const movieDetails = await fetchMovieDetails(movieId);
               setMovie(movieDetails);
            } catch (error) {
                console.log(error); 
            } finally {
                setLoading(false);
            }
        }
        fetchMovieDetailsId();
    }, [movieId]);

    return (
        <>
            <Link className={s.goBack} to={backLinkHref}> 
                       <HiArrowLeft size="15" /> Go back
            </Link>

            {loading && <Loader />}

            {movie && (
                <div className={s.movieDetalis}>
                  <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="" width="300"  />
                  <div>
                   <h2>{movie.title}</h2>
                   <p>User Score: {movie.popularity}</p>
                   <h3>Overview</h3>
                   <p>{movie.overview}</p>
                   <h4>Genres</h4>
                   <ul className={s.genreList} > {movie.genres.map( genre => (
                                                <li key={genre.id}>{genre.name}</li>
                                         ))}
                   </ul>
                  </div>
                </div>
                )}
                <hr />
                <div>
                   <h4>Additional information</h4>
                   <ul>
                    <li>
                        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                    </li>
                    <li>
                        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
                    </li>
                   </ul>
        <Outlet />
        </div>
        </>
    )
};

export default MovieDetails;

