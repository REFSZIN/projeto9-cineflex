import "./style.js"
import tumb1 from "../../assets/images/tumb1.png"
import tumb2 from "../../assets/images/tumb2.png"
import { Link } from "react-router-dom";
import {Maiin ,Mainn,H2, ListTumbs, BackTmbMain, Tumb } from "./style.js"

export default function Main (){
    return(
        <Maiin>
            <Mainn>
                <H2>Selecione o filme</H2>
                <ListTumbs>
                    <BackTmbMain>
                        <Link to='/sessoes'><Tumb src={tumb1} alt="Thumbnail"/></Link>
                    </BackTmbMain>
                    <BackTmbMain>
                        <Link to='/sessoes'><Tumb src={tumb2} alt="Thumbnail"/></Link>
                    </BackTmbMain>
                    <BackTmbMain>
                        <Link to='/sessoes'><Tumb src={tumb1} alt="Thumbnail"/></Link>
                    </BackTmbMain>
                </ListTumbs>
            </Mainn>
        </Maiin>
    );
};