import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Homepage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <Movies>
      <h2>Selecione o filme</h2>
      <div className="movies">
        {movies.map((movie) => {
          return (
            <Link to={`/sessoes/${movie.id}`} key={movie.id} className="movie">
              <img src={movie.posterURL} alt={movie.title} />
            </Link>
          );
        })}
      </div>
    </Movies>
  );
}

const Movies = styled.main`
  margin-top: 80px;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .movie {
    margin: 9px 30px 0 0;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  img {
    width: 129px;
  }
`;

export default Homepage;
