import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchTrending } from "services/movieApi";
import { Loader } from "components/loader/loader";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const fetchTredingMovies = async () => {
            setLoading(true);
            try {
                const tredingMovies = await fetchTrending();
                setMovies(tredingMovies);    
            } catch (error) {
                console.log(error);    
            } finally {
                setLoading(false);
            }
        }
        fetchTredingMovies();

    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            {
                movies.map(movi => (
                    <Link key={movi.id} to={`/movies/${movi.id}`} state={{ from: location }}>
                        <li>{movi.title || movi.name}</li>
                    </Link>
                ))
            }
            {loading && <Loader />}
        </div>
    )
};

export default Home;

