import "./style.css"
import tumb1 from "../../assets/images/tumb1.png"
export default function FooterSeats (){
    return(
        <footer>
            <section className="footerSeats">
                <figure className="backTumb">
                    <img className="tumbFooter"  src={tumb1} alt="Thumbnail"/>
                </figure>
                <h3>Enola Holmes <br/>Quinta-feira - 15:00 </h3>
            </section>
        </footer>
    );
};