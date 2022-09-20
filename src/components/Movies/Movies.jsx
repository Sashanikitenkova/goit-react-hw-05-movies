import { MdSearch } from "react-icons/md";
import { useState, useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
// import {toast} from 'react-toastify';
import { Loader } from "components/loader/loader";
import { fetchSearchMovies } from "services/movieApi";
import s from './Movies.module.css';

const Movies = () => {
    const [moviesSearch, setMoviesSearch] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams({});
    const moviesName = searchParams.get("movie");
    const location = useLocation();
  
    useEffect(() => {
        // if (moviesName.trim() === '') {
        //                 return toast("Search muvies name missing");
        // } 

        if (moviesName) {
            const fetchMoviesSearch = async () => {
                setLoading(true);
                try {
                    const moviesNameSearch = await fetchSearchMovies(moviesName);
                    setMoviesSearch(moviesNameSearch);
                } catch (error) {
                    console.log(error);      
                } finally {
                    setLoading(false);
                }
            }
            fetchMoviesSearch();
        }

    }, [moviesName]);

    const handleSubmit = event => {
        event.preventDefault(); 
        setSearchParams({ movie: event.target.elements.movie.value.toLowerCase() });
        event.target.reset(); 
    }

    return (
        <div>
        <div className={s.Searchbar}>
        <form onSubmit={handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
            <MdSearch className={s.SearchFormButtonLabel} />
        </button>
    
        <input
            type="text"
            name="movie"
            className={s.SearchFormInput}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
        />
    </form>
    </div>

    {loading && <Loader />}

    {
                moviesSearch.map(movi => (
                    <Link key={movi.id} to={`/movies/${movi.id}`} state={{ from: location }}>
                        <li>{movi.title || movi.name}</li>
                    </Link>
                ))
            }

    </div>
    )   
};

export default Movies;


// export const Movies = () => {
//     const [moviesSearch, setMoviesSearch] = useState([]);
//     const [moviesName, setMoviesName] = useState('');

//     // useEffect(() => {
//     //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=6fdda2cf7740f9f0b3187603c7864dcc&language=en-US&page=1&include_adult=false&query=${moviesName}`)
//     //     .then(res => res.json())
//     //     .then(data => data)
//     //     .then(({results}) => setMoviesSearch(results))
//     // }, []);

//     const handleNameChange = event => {
//         setMoviesName(event.currentTarget.value.toLowerCase());
//     }

//     const handleSubmit = event => {
//         event.preventDefault();

//         if (moviesName.trim() === '') {
//             return toast("Search muvies name missing");
//         } 
//             fetch(`https://api.themoviedb.org/3/search/movie?api_key=6fdda2cf7740f9f0b3187603c7864dcc&language=en-US&page=1&include_adult=false&query=${moviesName}`)
//             .then(res => res.json())
//             .then(data => data)
//             .then(({results}) => setMoviesSearch(results))
        

//         // onSubmit(moviesName);
//         // setMoviesName('');
//     }

//     return (
//         <div>
//         <div className={s.Searchbar}>
//         <form onSubmit={handleSubmit} className={s.SearchForm}>
//         <button type="submit" className={s.SearchFormButton}>
//             <MdSearch className={s.SearchFormButtonLabel} />
//         </button>
    
//         <input
//             type="moviesName"
//             value={moviesName}
//             className={s.SearchFormInput}
//             autoComplete="off"
//             autoFocus
//             placeholder="Search movies"
//             onChange={handleNameChange}
//         />
//     </form>
//     </div>

//     {
//                 moviesSearch.map(movi => (
//                     <Link key={movi.id} to={`/movies/${movi.id}`}>
//                         <li>{movi.title || movi.name}</li>
//                     </Link>
//                 ))
//             }

//     </div>
//     )   
// }