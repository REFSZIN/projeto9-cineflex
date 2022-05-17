import "./style.css"

export default function Success(){
    return(
        <section>
            <h6>Pedido feito com sucesso!</h6>
            <article>
                <h4>Filme e sessão</h4>
                <span>Enola Holmes <br/>24/06/2021 15:00</span>
            </article>
            <article>
                <h4>Ingressos</h4>
                <span>Assento 15<br/>Assento 16</span>
            </article>
            <article>
                <h4>Comprador</h4>
                <span>Nome: João da Silva Sauro<br/>CPF: 123.456.789-10</span>
            </article>
            <article className="centerBtn">
                <button className="btnSuccess">Voltar pra Home</button>
            </article>
        </section>
    );
};