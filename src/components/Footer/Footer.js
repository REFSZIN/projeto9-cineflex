
import {Foooter, BackTumb, H3 , FooterHour, TumbFooter } from"./style.js";
import React from "react";
import tumb2 from "../../assets/images/tumb2.png";
export default function Footer (){
    return(
        <Foooter>
            <FooterHour>
                <BackTumb>
                    <TumbFooter src={tumb2} alt="Thumbnail"/>
                </BackTumb>
                <H3>Enola Holmes</H3>
            </FooterHour>
        </Foooter>
    );
};