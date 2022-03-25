import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// import "./style.css";
import Seats from "../Seats";

function BookSeats() {
  const [section, setSection] = useState({ seats: [] });
  const [selected, setSelected] = useState([]);

  const { idSection } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`
    );
    promise.then((response) => {
      setSection(response.data);
    });
    promise.catch((err) => console.log(err.status, err.message));
  }, []);

  function sentData(data){

  }

  const seats = section.seats;

  return seats.length > 0 ? (
    <Main className="BookSeats">
      <h2>Selecione o(s) assento(s)</h2>
      <Seats seats={seats} setSelected={setSelected} selected={selected} />
      {selected.length > 0 ? (
        selected.sort().map((seat) => {
          return (
            <form className="buyer" key={seat}>
              <label>Nome do comprador assento {seat}</label>
              <input className="name" placeholder="Digite seu nome" required></input>
              <label>CPF do comprador assento {seat}</label>
              <input className="name" placeholder="Digite seu CPF" required></input>
            </form>
          );
        })
      ) : (
        <></>
      )}
      <Link to="/sucesso">
        <button className="book">Reservar assento(s)</button>
      </Link>
    </Main>
  ) : (
    <></>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 24px 30px;

  h2 {
    line-height: 91px;
  }

  form {
    width: 100%;
    margin-top: 42px;
  }

  form label {
    font-size: 18px;
    line-height: 21px;
  }

  form input {
    margin-bottom: 7px;
    width: 100%;
    height: 51px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    padding-left: 18px;
    font-size: 18px;
  }

  form input::placeholder {
    color: #afafaf;
    font-style: italic;
  }

  .book {
    width: 225px;
    height: 42px;
    margin-top: 50px;
    background-color: var(--orange);
    border-radius: 3px;
    border: none;
    color: #ffffff;
    font-size: 18px;
    line-height: 21px;
  }
`;

export default BookSeats;
