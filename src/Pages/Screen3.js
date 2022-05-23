import Success from "../components/Success/Success";
import React from "react";
// import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
export default function Screen3(){
    const { idSection } = useParams();
    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [ title, setTitle ] = useState();
    const [ thumb, setThumb ] = useState();
    const [seat1 ,setSeat1] =useState();
    const [seat2 ,setSeat2] =useState();
    // setSeat1(resposta.data.seats);
    // setSeat2(resposta.data.seats);
    // setDay(resposta.data.day.weekday);
    // setHour(resposta.data.name);
    // setTitle(resposta.data.movie.title);
    // setThumb(resposta.data.movie.posterURL);
    // useEffect(() => {
    //     const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`);
    //     promise.then((resposta) => {
    //         setSeat1(resposta.data.seats);
    //         setSeat2(resposta.data.seats);
    //         setDay(resposta.data.day.weekday);
    //         setHour(resposta.data.name);
    //         setTitle(resposta.data.movie.title);
    //         setThumb(resposta.data.movie.posterURL);
    //     });
    // },[idSection]);
    
    return(
        <>
            <Success seat1={seat1} seat2={seat2} day={day}hour={hour} title={title} thumb={thumb}/>
        </>
    );
};