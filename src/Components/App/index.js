import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react"

import Header from "./../Header";
import Homepage from "./../Homepage";
import BookSeats from "./../BookSeats";
import Sessions from "./../Sessions";
import Success from "./../Success";

import "./../../assets/css/reset.css"
import "./../../assets/css/style.css"

function App(){
    const[movie, setMovie] = useState({});

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/sessoes/:idMovie" element={<Sessions />} />
                <Route path="/assentos/:idSession" element={<BookSeats movie={movie} setMovie={setMovie} />} />
                <Route path="/sucesso" element={<Success movie={movie} setMovie={setMovie} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;