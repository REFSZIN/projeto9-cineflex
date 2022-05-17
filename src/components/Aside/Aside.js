import "./style.css"
import Hour from "../Hour/Hour";
import Seats from "../Seats/Seats";
import Success from "../Success/Success";

export default function Aside(){
    return(
        <aside>
            <Hour />
            <Seats />
            <Success />
        </aside>
    );
};