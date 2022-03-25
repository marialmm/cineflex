import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./../Header";
import Homepage from "./../Homepage";
import BookSeats from "./../BookSeats";
import Sections from "./../Sections";
import Success from "./../Success";

import "./../../assets/css/reset.css"
import "./../../assets/css/style.css"

function App(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/sessoes/:idMovie" element={<Sections />} />
                <Route path="/assentos/:idSection" element={<BookSeats />} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;