import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// import "./style.css";
import Seats from "../Seats";

function BookSeats() {
  const [section, setSection] = useState({ seats: [] });
  const [selected, setSelected] = useState([]);
  const [booked, setBooked] = useState({});

  const navigate = useNavigate();
  const { idSection } = useParams();

  function updateSelected(selected){
    booked.compradores = [];
    selected.forEach((seat)=>{
      booked.compradores.push({
        idAssento: parseInt(seat),
        nome: "",
        cpf: "",
      });
    });
    booked.ids = [...selected];
    setBooked({...booked})
    setSelected([...selected]);
  }


  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`
    );
    promise.then((response) => {
      setSection(response.data);
    });
    promise.catch((err) => console.log(err.status, err.message));
  }, []);

  function sentData(e){
    e.preventDefault();
    if(validateInput()){
      const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", booked);
      promise.then(()=>navigate("/sucesso"));
      promise.catch((err) => console.log(err.status, err.message));
    } else{
      alert('CPF inválido');
    }
  }

  function validateInput(){
    const cpf = booked.compradores.map((comprador) => comprador.cpf);
    const cpfValido = cpf.filter((comprador) => comprador.length === 11);
    return (cpf.length === cpfValido.length);
  }

  function handleInputNameChange(e, index){
    booked.compradores[index].nome=e.target.value;
    setBooked({...booked});
  }

  function handleInputCPFChange(e, index){
    booked.compradores[index].cpf=e.target.value;
    setBooked({...booked});
  }

  const seats = section.seats;

  return seats.length > 0 ? (
    <Main className="BookSeats">
      <h2>Selecione o(s) assento(s)</h2>
      <Seats seats={seats} setSelected={updateSelected} selected={selected} />
      {selected.length > 0 ? (
        <>
          <form onSubmit={sentData}>
            {selected.sort().map((seat, index) => {
              return(<>
                <label>Nome do comprador assento {seat}</label>
                <input 
                value={booked.compradores[index].nome} 
                onChange={(e)=>handleInputNameChange(e, index)} 
                placeholder="Digite seu nome" 
                required></input>
                <label>CPF do comprador assento {seat}</label>
                <input 
                onChange={(e)=>handleInputCPFChange(e, index)} 
                placeholder="Digite seu CPF (apenas numeros)"
                type="number" 
                required></input>
              </>)
            })
          }
          <button type="submit">Reservar assento(s)</button>
          </form>
        
        </>
      ) : (
        <></>
      )}
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

  form button {
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
