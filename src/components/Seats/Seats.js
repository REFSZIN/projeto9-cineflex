import "./style.css"
import { Link } from "react-router-dom"
export default function Seats(){
    return (
        <section className="seats">
            <h2>Selecione o(s) assento(s)</h2>
            <article className="listSeats">
                <button className="seatBtn">01</button>
                <button className="seatBtn">02</button>
                <button className="seatBtn">03</button>
                <button className="seatBtn">04</button>
                <button className="seatBtn">05</button>
                <button className="seatBtn">06</button>
                <button className="seatBtn">07</button>
                <button className="seatBtn">08</button>
                <button className="seatBtn">09</button>
                <button className="seatBtn">10</button>
                <button className="seatBtn">01</button>
                <button className="seatBtn">02</button>
                <button className="seatBtn">03</button>
                <button className="seatBtn">04</button>
                <button className="seatBtn">05</button>
                <button className="seatBtn">06</button>
                <button className="seatBtn">07</button>
                <button className="seatBtn">08</button>
                <button className="seatBtn">09</button>
                <button className="seatBtn">10</button>
                <button className="seatBtn">01</button>
                <button className="seatBtn">02</button>
                <button className="seatBtn">03</button>
                <button className="seatBtn">04</button>
                <button className="seatBtn">05</button>
                <button className="seatBtn">06</button>
                <button className="seatBtn">07</button>
                <button className="seatBtn">08</button>
                <button className="seatBtn">09</button>
                <button className="seatBtn">10</button>
                <button className="seatBtn">01</button>
                <button className="seatBtn">02</button>
                <button className="seatBtn">03</button>
                <button className="seatBtn">04</button>
                <button className="seatBtn">05</button>
                <button className="seatBtn">06</button>
                <button className="seatBtn">07</button>
                <button className="seatBtn">08</button>
                <button className="seatBtn">09</button>
                <button className="seatBtn">10</button>
                <button className="seatBtn">01</button>
                <button className="seatBtn">02</button>
                <button className="seatBtn">03</button>
                <button className="seatBtn">04</button>
                <button className="seatBtn">05</button>
                <button className="seatBtn">06</button>
                <button className="seatBtn">07</button>
                <button className="seatBtn">08</button>
                <button className="seatBtn">09</button>
                <button className="seatBtn">10</button>
            </article> 
            <div className="listTypeSeats">
                <figure>
                    <button className="seatBtnSelect"></button>
                    <figcaption>Selecionado</figcaption>
                </figure>
                <figure>
                    <button className="seatBtnDispo"></button>
                    <figcaption>Disponível</figcaption>
                </figure>
                <figure>
                    <button className="seatBtnIndispo"></button>
                    <figcaption>Indisponível</figcaption>
                </figure>
            </div>
            <article className="inputs">
                <h5>Nome do comprador:</h5>
                <input type="text" placeholder="Digite seu nome..."/>
                <h5>CPF do comprador:</h5>
                <input type="text" placeholder="Digite seu CPF..."/>
            </article>
            <article className="centerBtn">
                <Link to='/pedido'><button className="btnAside">Reservar assento(s)</button></Link>
            </article>
        </section>
    )
}