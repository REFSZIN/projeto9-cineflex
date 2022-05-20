import {Foooter, BackTumbSeat, H3 , FoooterSeats, TumbFooter} from "./style.js";
import React from "react";
import tumb1 from "../../assets/images/tumb1.png";
export default function FooterSeats (){
    return(
        <Foooter>
            <FoooterSeats>
                <BackTumbSeat>
                    <TumbFooter  src={tumb1} alt="Thumbnail"/>
                </BackTumbSeat>
                <H3>Enola Holmes <br/>Quinta-feira - 15:00 </H3>
            </FoooterSeats>
        </Foooter>
    );
};