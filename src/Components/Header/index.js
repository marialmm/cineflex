import styled from "styled-components";

// import "./style.css";

function Header() {
  return (
    <Cineflex>
      <h1>CINEFLEX</h1>
    </Cineflex>
  );
}

const Cineflex = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--available);
  width: 100%;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--orange);
    font-size: 34px;
    line-height: 40px;
  }
`;

export default Header;
