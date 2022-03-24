import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

import "./style.css";

function Homepage(){
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promise.then((response)=>{
            setMovies(response.data);
        })
    }, [])

    return(
        <main className="Homepage">
            <h2>Selecione o filme</h2>
            <div className="movies">
                {movies.map((movie) => {
                    return (
                    <Link to={`/sessoes/${movie.id}`} key={movie.id} className="movie" >
                        <img src={movie.posterURL} alt={movie.title} />
                    </Link>)
                })}
            </div>
        </main>
    )
}

export default Homepage;