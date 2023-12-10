import { Loader } from "react-loaders";
import { useState, useEffect } from 'react';
import { getCast } from 'api';
import { useParams } from 'react-router-dom';

export default function Cast() {
    const { movieId } = useParams();
    const [castInfo, setCastInfo] = useState(null);
    const [isLoading, setLoader] = useState(false);
    const [isError, setError] = useState(false);

    useEffect(() => {
        const fetchCast = async () => {
            try {
                setLoader(true);
                const response = await getCast({ id: movieId });
                const castResponse = response.cast;
                const details = castResponse.map(item => ({
                    id: item.id,
                    img: item.profile_path ? `https://image.tmdb.org/t/p/w300${item.profile_path}` :
                        'https://placehold.it/300x450?text=Image_not_found',
                    name: item.name,
                    char: item.character,
                }));
                setCastInfo(details);
            } catch (error) {
                setError(true);
            } finally {
                setLoader(false);
            }
        };

        if (movieId) {
            fetchCast();
        }
    }, [movieId]);

    return (
        <div>
            {isLoading && <Loader />}
            {isError && <div>Error catching cast</div>}
            {castInfo && castInfo.length > 0 ? (
                <ul>
                    {castInfo.map(item => (
                        <div key={item.id}>
                            <img src={item.img} alt={item.name} />
                            <h2>Name: {item.name}</h2>
                            <h3>Character: {item.char}</h3>
                        </div>
                    ))}
                </ul>
            ) : (
                <p>No cast info found</p>
            )}
        </div>
    );
}