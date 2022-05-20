import "./style.js"
import { Link } from "react-router-dom";
import {Maiin ,Mainn, H2, ListTumbs, BackTmbMain, Tumb } from "./style.js"
import { useEffect , useState } from "react";
import axios from "axios";
export default function Main (){
    const [filme ,setfilme] =useState([]);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        requisicao.then(resposta => {
            resposta.data(filme =>{
                setfilme(resposta.data)
            })
        });
    },[]);
    
    const ListTumb = poster.map(poster =>{
        <BackTmbMain>
            <Link to={'/sessoes/:${poster.idFilme}'}>
                <Tumb src={poster.posterURL} alt={poster.idFilme}/>
            </Link>
        </BackTmbMain>
    })
    return(
        <Maiin>
            <Mainn>
                <H2>Selecione o filme</H2>
                <ListTumbs>
                    <ListTumb />
                </ListTumbs>
            </Mainn>
        </Maiin>
    );
};