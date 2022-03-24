import {Link, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

import "./style.css";

function Sections(){
    const {idMovie} = useParams();

    const [movie, setMovie] = useState({days: []});

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);
        promise.then((response)=>{
            setMovie(response.data);
            console.log(response.data);
        });
    }, [])

    const sections = movie.days;

    return(
        sections.length > 0 ? 
            <main className="Sections">
            <h2>Selecione o horário</h2>
            <div className="sections">
                {sections.map((day) => {return(
                    <div key={day.id} className="day">
                        <p>{day.weekday} - {day.date}</p>
                        <div className="times">
                            {day.showtimes.map((section) => {return(
                                <Link to={`/assentos/${section.id}`} key={section.id}>
                                    <button className="time">
                                        {section.name}
                                    </button>
                                </Link>
                            )})}
                        </div>
                    </div>
                )})}
            </div>
        </main> : <></>
    )
}

export default Sections;