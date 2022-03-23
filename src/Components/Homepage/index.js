import {Link} from "react-router-dom";

import "./style.css";

function Homepage(){
    let movies=[{
        id: "1",
        title: "movie 1",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"
    },
    {
        id: "2",
        title: "movie 2",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"
    },
    {
        id: "3",
        title: "movie 3",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"
    },
    {
        id: "4",
        title: "movie 4",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"
    },
    {
        id: "5",
        title: "movie 5",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"
    }
]
    return(
        <main className="Homepage">
            <h2>Selecione o filme</h2>
            <div className="movies">
                {movies.map((movie) => {
                    return (
                    <Link to="/sessoes" key={movie.id} className="movie" >
                        <img src={movie.posterURL} alt={movie.title} />
                    </Link>)
                })}
            </div>
        </main>
    )
}

export default Homepage;