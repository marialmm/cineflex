import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./../Header";
import Homepage from "./../Homepage";
import BookSeats from "./../BookSeats";
import Sessions from "./../Sessions";
import Success from "./../Success";

import "./../../assets/css/reset.css";
import "./../../assets/css/style.css";

function App() {
  const [movie, setMovie] = useState({});
  const [home, setHome] = useState(true);

  return (
    <BrowserRouter>
      <Header home={home} />
      <Routes>
        <Route path="/" element={<Homepage home={home} setHome={setHome} />} />
        <Route
          path="/sessoes/:idMovie"
          element={<Sessions home={home} setHome={setHome} />}
        />
        <Route
          path="/assentos/:idSession"
          element={
            <BookSeats
              movie={movie}
              setMovie={setMovie}
              home={home}
              setHome={setHome}
            />
          }
        />
        <Route
          path="/sucesso"
          element={
            <Success
              movie={movie}
              setMovie={setMovie}
              home={home}
              setHome={setHome}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
