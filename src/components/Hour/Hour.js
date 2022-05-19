import "./style.js"
import {BtnHour, Days, Hoour, Date, H2 } from "./style.js"
import { Link } from "react-router-dom"

export default function Hour(){
    return(
        <Hoour>
            <H2>Selecione o horário</H2>
            <Days>
                <Date>Quinta-feira - 24/06/2021</Date>
                <div>
                    <Link to='/assentos'><BtnHour>15:00</BtnHour></Link>
                    <Link to='/assentos'><BtnHour>19:00</BtnHour></Link>
                </div>
            </Days>
            <Days>
                <Date>Sexta-feira - 25/06/2021</Date>
                <div>
                    <Link to='/assentos'><BtnHour>15:00</BtnHour></Link>
                    <Link to='/assentos'><BtnHour>19:00</BtnHour></Link>
                </div>
            </Days>
        </Hoour>
    )
}