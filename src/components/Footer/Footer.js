import "./style.css"
import tumb2 from "../../assets/images/tumb2.png"
export default function Footer (){
    return(
        <footer>
            <section className="footerHour">
                <figure className="backTumb">
                    <img className="tumbFooter" src={tumb2} alt="Thumbnail"/>
                </figure>
                <h3>Enola Holmes</h3>
            </section>
        </footer>
    );
};