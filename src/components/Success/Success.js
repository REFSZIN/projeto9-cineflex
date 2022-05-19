import "./style.js"
import {H6, H4, BtnSuccess,Ticket, CenterBtn, Succeess, Span } from "./style.js"
import { Link } from "react-router-dom";
export default function Success(){
    return(
        <Succeess>
            <H6>Pedido feito com sucesso!</H6>
            <Ticket>
                <article>
                    <H4>Filme e sessão</H4>
                    <Span>Enola Holmes <br/>24/06/2021 15:00</Span>
                </article>
                <article>
                    <H4>Ingressos</H4>
                    <Span>Assento 15<br/>Assento 16</Span>
                </article>
                <article>
                    <H4>Comprador</H4>
                    <Span>Nome: João da Silva Sauro<br/>CPF: 123.456.789-10</Span>
                </article>
            </Ticket>
            <CenterBtn>
                <Link to='/'> <BtnSuccess>Voltar pra Home</BtnSuccess> </Link>
            </CenterBtn>
        </Succeess>
    );
};