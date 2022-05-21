import "./style.js"
import seatImg from "../../assets/images/seats.png"
import Load from "../Load/Load.js";
import { Link } from "react-router-dom"
import { ListSeats, H5, H2, BtnAside, SeatBtn, SeatBtnDispo, SeatBtnIndispo, SeatBtnSelect, ListTypeSeats, Input, Figure, FigCaption, Setimg, Seeat ,Seeats, CenterBtn, Article } from "./style.js"
export default function Seats(props){
    const { seats } = props;
    console.log(seats) 
    if(!seats){
        return (<Load />);
    }

    return (
        <Seeats>
            <H2>Selecione o(s) assento(s)</H2>
            <ListSeats>
            {seats.map((data, index) =>{
                return(
                <Setimg key={index}>
                    <Seeat src={seatImg} alt="Seat"/>
                    <SeatBtn>{data.name}</SeatBtn>
                </Setimg>);
            })}
            </ListSeats> 
            <ListTypeSeats>
                <Figure >
                    <SeatBtnSelect></SeatBtnSelect>
                    <FigCaption>Selecionado</FigCaption>
                </Figure>
                <Figure>
                    <SeatBtnDispo></SeatBtnDispo>
                    <FigCaption>Disponível</FigCaption>
                </Figure>
                <Figure>
                    <SeatBtnIndispo></SeatBtnIndispo>
                    <FigCaption>Indisponível</FigCaption>
                </Figure>
            </ListTypeSeats> 
            <Article>
                <H5>Nome do comprador:</H5>
                <Input type="text" placeholder="Digite seu nome..."/>
                <H5>CPF do comprador:</H5>
                <Input type="text" placeholder="Digite seu CPF..."/>
            </Article>
            <CenterBtn>
                <Link to='/pedido'><BtnAside>Reservar assento(s)</BtnAside></Link>
            </CenterBtn>
        </Seeats>
    )
}