import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./style.css";

function Seats() {
  const [section, setSection] = useState({ seats: [] });
  const [selected, setSelected] = useState([]);

  const {idSection} = useParams();

  useEffect(()=>{
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`);
    promise.then((response)=>{
      setSection(response.data);
    });
    promise.catch((err) => console.log(err.status, err.message));
  }, [])

  const seats = section.seats;
  const label = [
    {
      title: "Selecionado",
      type: "selected",
    },
    {
      title: "Disponível",
      type: "available",
    },
    {
      title: "Indisponível",
      type: "unavailable",
    },
  ];

  return seats.length > 0 ? (
    <main className="Seats">
      <h2>Selecione o(s) assento(s)</h2>
      <section className="seats">
        {seats.map((seat) => {
          return (
            <button
              key={seat.id}
              className={!selected.includes(seat.name) ?
                (seat.isAvailable ? "available" : "unavailable") : "selected"}
              onClick={()=> {if(seat.isAvailable){
                  if(!selected.includes(seat.name)){
                setSelected([...selected, seat.name]);
                } else{
                  selected.splice(selected.indexOf('b'), 1);
                  setSelected([...selected]);
              }} else{
                alert('Esse assento não está disponível');
              }
            }}
            >
              {seat.name}
            </button>
          );
        })}
        <div className="label">
          {label.map(({ title, type }) => {
            const className = `color ${type}`;
            return (
              <div key={type}>
                <div className={className}></div>
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </section>
      {selected.length > 0 ? (
        <section className="buyer">
          <h3>Nome do comprador</h3>
          <input className="name" placeholder="Digite seu nome"></input>
          <h3>CPF do comprador</h3>
          <input className="name" placeholder="Digite seu CPF"></input>
        </section>
      ) : <></>}
      <Link to="/sucesso">
        <button className="book">Reservar assento(s)</button>
      </Link>
    </main>
  ) : (
    <></>
  );
}

export default Seats;
