import "./style.css"

export default function Hour(){
    return(
        <section>
            <h2>Selecione o horário</h2>
            <article className="days">
                <span className="date">Quinta-feira - 24/06/2021</span>
                <div className="btns">
                    <button className="btnHour">15:00</button>
                    <button className="btnHour">19:00</button>
                </div>
            </article>
            <article className="days">
                <span className="date">Sexta-feira - 25/06/2021</span>
                <div className="btns">
                    <button className="btnHour">15:00</button>
                    <button className="btnHour">19:00</button>
                </div>
            </article>
        </section>
    )
}