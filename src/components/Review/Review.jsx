import { useState, useEffect } from "react";
import {getReviews} from 'api';
import { Loader } from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { ContainerReview, Item, ReviewList } from './Review.styled'

export default function Reviews() {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState(null);
    const [isLoading, setLoader] = useState(false);
    const [isError, setError] = useState(false);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoader(true);
                const response = await getReviews({ id: movieId });
                const reviewsResponse = response.results;
                const info = reviewsResponse.map(item => ({
                    id: item.id,
                    author: item.author,
                    review: item.content,
                }));
                setReviews(info);
            } catch (error) {
                setError(true);
            } finally {
                setLoader(false);
            }
        };

        if (movieId) {
            fetchReviews();
        }
    }, [movieId]);
    return (
        <ContainerReview>
            {isLoading && <Loader/>}
            {isError && <div>Error fetching reviews</div>}

            {reviews && reviews.length > 0 ? (
                <ReviewList>
                    {reviews.map(item => (
                        <li key={item.id}>
                            <p><Item>Name: </Item>{item.name}</p>
                            <p><Item>Review: </Item>{item.review}</p>
                        </li>
                    ))}
                </ReviewList>
            ) : (
                <p>No reviews found</p>
            )}
        </ContainerReview>
    );
}