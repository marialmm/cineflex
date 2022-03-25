import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// import "./style.css";

function Sections() {
  const { idMovie } = useParams();

  const [movie, setMovie] = useState({ days: [] });

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`
    );
    promise.then((response) => {
      setMovie(response.data);
    });
  }, []);

  const sections = movie.days;

  return sections.length > 0 ? (
    <Main>
      <h2>Selecione o horário</h2>
      <div>
        {sections.map((day) => {
          return (
            <div key={day.id}>
              <p>
                {day.weekday} - {day.date}
              </p>
              <div>
                {day.showtimes.map((section) => {
                  return (
                    <Link to={`/assentos/${section.id}`} key={section.id}>
                      <button>{section.name}</button>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Main>
  ) : (
    <></>
  );
}

const Main = styled.main`
  div {
    margin-left: 24px;
  }

  div > div {
    margin-bottom: 23px;
  }

  p{
    font-size: 20px;
  }

  div > div > div{
    margin: 22px 0 0 0;
  }

  button{
    margin-right: 8px;
    background-color: var(--orange);
    color: #FFFFFF;
    width: 83px;
    height: 43px;
    border: none;
    font-size: 18px;
  }
`;

export default Sections;
