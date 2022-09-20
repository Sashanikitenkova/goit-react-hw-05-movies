import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "services/movieApi";
import { Loader } from "components/loader/loader";

const Cast = () => {
    const { movieId } = useParams();
    const [casts, setCasts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMoviesCasts = async () => {
            setLoading(true);
            try {
                const moviesCasts = await fetchCast(movieId);
                setCasts(moviesCasts);
            } catch (error) {
                console.log(error);  
            } finally {
                setLoading(false);
            }
        }
        fetchMoviesCasts();
    }, [movieId]);

            return (
                <div>
                    {loading && <Loader />}
                    {casts.length === 0 ? (
                        <p>There is no information about the cast...</p>
                        ) : (
                    <ul>
                        {
                          casts.map(cast => (
                            <li key={cast.id}>
                                <img src={'https://image.tmdb.org/t/p/w500' + cast.profile_path} alt="" width="100"  />
                                <h2>{cast.name}</h2>
                                <h3>Character:{cast.character}</h3>
                            </li>
                           ))
                        }
                    </ul>
                    )}
                </div>
            )        
};

export default Cast;

