import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviews } from "services/movieApi";
import { Loader } from "components/loader/loader";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMoviesReviews = async () => {
            setLoading(true);
            try {
                const moviesReviews = await fetchReviews(movieId);
                setReviews(moviesReviews);    
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchMoviesReviews();
    }, [movieId]);

            return (
                <div>
                    {loading && <Loader />}
                    <ul>
                    {
                        reviews.map(review => (
                            <li key={review.id} >
                                <h3>Author: {review.author}</h3>
                                <span>{review.content}</span>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            )         
};

export default Reviews;

