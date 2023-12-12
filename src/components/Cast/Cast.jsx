import { Loader } from "react-loaders";
import { useState, useEffect } from 'react';
import { getCast } from 'api';
import { useParams } from 'react-router-dom';
import {Item, ListCast, CastContainer, CastImg} from './Cast.styled'
import { getPoster } from "api";

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
                    img:  getPoster(item.profile_path),
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
                <ListCast>
                    {castInfo.map(item => (
                        <CastContainer key={item.id}>
                            <CastImg src={item.img} alt={item.name} width='200'/>
                            <div>
                            <p><Item>Name:</Item> {item.name}</p>
                            <p><Item>Character:</Item> {item.char}</p>
                            </div>
                        </CastContainer>
                    ))}
                </ListCast>
            ) : (
                <p>No cast info found</p>
            )}
        </div>
    );
}