import "./style.css"
import tumb2 from "../../assets/images/tumb2.png"
import tumb1 from "../../assets/images/tumb1.png"
export default function Footer (){
    return(
        <footer>
            <section className="footerHour">
                <figure className="backTumb">
                    <img className="tumbFooter" src={tumb2} alt="Thumbnail"/>
                </figure>
                <h3>Enola Holmes</h3>
            </section>
            <section className="footerSeats">
                <figure className="backTumb">
                    <img className="tumbFooter"  src={tumb1} alt="Thumbnail"/>
                </figure>
                <h3>Enola Holmes <br/>Quinta-feira - 15:00 </h3>
            </section>
        </footer>
    );
};