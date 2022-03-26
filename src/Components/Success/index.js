import styled from "styled-components";
import { Link } from "react-router-dom";

function Success({ movie, setMovie }) {
  //   const movie = {
  //     title: "titulo do filme",
  //     day: "Dia - data",
  //     buyers: [
  //       {
  //         idAssento: 5601,
  //         nome: "Nome 1",
  //         cpf: "11111111111",
  //       },
  //       {
  //         idAssento: 5602,
  //         nome: "Nome 2",
  //         cpf: "222222222222",
  //       },
  //     ],
  //   };
  const { title, day, buyers } = movie;
  buyers.forEach((buyer) => {
    buyer.idAssento = buyer.idAssento % 50 !== 0 ? buyer.idAssento % 50 : 50;
    let cpf = "";
    for (let i = 0; i < buyer.cpf.length; i++) {
      cpf += buyer.cpf[i];
      if (cpf.length === 3 || cpf.length === 7) {
        cpf += ".";
      } else if (cpf.length === 11) {
        cpf += "-";
      }
    }
    buyer.cpf = cpf;
  });

  console.log(movie);
  return (
    <Main>
      <h3>Pedido feito com sucesso!</h3>
      <section>
        <h4>Filme e sessão</h4>
        <p>{title}</p>
        <p>{day}</p>
      </section>
      <section>
        <h4>Ingressos</h4>
        {buyers.map(({ idAssento }) => {
          const seat = idAssento % 50 !== 0 ? idAssento % 50 : 50;
          return (
            <>
              <p>Assento: {seat}</p>
            </>
          );
        })}
      </section>
      <section>
        <h4>Compradores:</h4>
        {buyers.map(({ idAssento, nome, cpf }) => {
          return (
            <>
              <p>
                Nome assento {idAssento}: {nome}
              </p>
              <p>
                CPF assento {idAssento}: {cpf}
              </p>
            </>
          );
        })}
      </section>

      <Link to="/">
        <button onClick={() => setMovie({})}>Voltar para Home</button>
      </Link>
    </Main>
  );
}

const Main = styled.main`
  margin-top: 67px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    padding-top: 28px;
    height: 110px;
    width: 178px;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    color: #247a6b;
    font-weight: 700;
  }

  section {
    width: 100%;
    margin-left: 35px;
    min-height: 110px;
  }

  h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }

  p {
    font-size: 22px;
    line-height: 26px;
  }

  button {
    margin: 20px 0;
    width: 225px;
    height: 42px;
    border: none;
    border-radius: 3px;
    background-color: var(--orange);
    color: #ffffff;
    font-size: 18px;
    line-height: 21px;
  }
`;

export default Success;
