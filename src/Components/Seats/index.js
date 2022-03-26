import styled from "styled-components";

function Seats({ seats, setSelected, selected }) {
  const label = [
    {
      title: "Selecionado",
      color: "var(--selected)",
    },
    {
      title: "Disponível",
      color: "var(--available)",
    },
    {
      title: "Indisponível",
      color: "var(--unavailable)",
    },
  ];

  let seatSelected = [];
  selected.forEach((seat) => seatSelected.push(seat.name));

  return (
    <Section className="Seats">
      {seats.map((seat) => {
        return (
          <Seat
            key={seat.id}
            color={
              !seatSelected.includes(seat.name)
                ? seat.isAvailable
                  ? {
                      color: "var(--available)",
                      border: "var(--available-border)",
                    }
                  : {
                      color: "var(--unavailable)",
                      border: "var(--unavailable-border)",
                    }
                : { color: "var(--selected)", border: "var(--selected-border)" }
            }
            onClick={() => {
              if (seat.isAvailable) {
                if (!selected.includes(seat.name)) {
                  selected.push({ name: seat.name, id: seat.id})
                  setSelected([...selected]);
                } else {
                  if(window.confirm("Deseja remover o assento e apagar os dados?")){
                    selected.splice(selected.indexOf(seat.name), 1);
                    setSelected([...selected]);
                  }                  
                }
              } else {
                alert("Esse assento não está disponível");
              }
              console.log(selected);
            }}
          >
            {seat.name}
          </Seat>
        );
      })}
      <div className="label">
        {label.map(({ title, color }) => {
          return (
            <Label key={color} color={color}>
              <div className="color"></div>
              <p>{title}</p>
            </Label>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  width: 330px;

  .label {
    display: flex;
    justify-content: space-evenly;
  }
`;

const Seat = styled.button`
  width: 26px;
  height: 26px;
  font-size: 11px;
  color: #000000;
  margin: 0 7px 18px 0;
  border-radius: 12px;
  padding: 0;
  border: 1px solid;
  background-color: ${(props) => props.color.color};
  border-color: ${(props) => props.color.border};
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .color {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  }
`;

export default Seats;
