import "./style.css"

export default function Seats(){
    return (
        <section>
            <h2>Selecione o(s) assento(s)</h2>
            <article>
                <acentos map></acentos>
                <figure>
                    <img/>
                    <figcaption>Selecionado</figcaption>
                </figure>
                <figure>
                    <img/>
                    <figcaption>Disponível</figcaption>
                </figure>
                <figure>
                    <img/>
                    <figcaption>Indisponível</figcaption>
                </figure>
            </article> 
            <article>
                <h5>Nome do comprador:</h5>
                <input type="text" placeholder="Digite seu nome..."/>
                <h5>CPF do comprador:</h5>
                <input type="text" placeholder="Digite seu CPF..."/>
            </article>
            <button>Reservar assento(s)</button>
        </section>
    )
}