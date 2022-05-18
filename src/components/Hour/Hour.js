import "./style.css"
import { Link } from "react-router-dom"

export default function Hour(){
    return(
        <section className="Hour">
            <h2>Selecione o horário</h2>
            <article className="days">
                <span className="date">Quinta-feira - 24/06/2021</span>
                <div className="btns">
                    <Link to='/assentos'><button className="btnHour">15:00</button></Link>
                    <Link to='/assentos'><button className="btnHour">19:00</button></Link>
                </div>
            </article>
            <article className="days">
                <span className="date">Sexta-feira - 25/06/2021</span>
                <div className="btns">
                    <Link to='/assentos'><button className="btnHour">15:00</button></Link>
                    <Link to='/assentos'><button className="btnHour">19:00</button></Link>
                </div>
            </article>
        </section>
    )
}