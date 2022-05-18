import "./style.css"
import tumb1 from "../../assets/images/tumb1.png"
import tumb2 from "../../assets/images/tumb2.png"
import { Link } from "react-router-dom";
export default function Main (){
    return(
        <main>
            <section className="main">
                <h2>Selecione o filme</h2>
                <article className="listTumbs">
                    <div className="backTmbMain">
                        <Link to='/sessoes'><img className="tumb" src={tumb1} alt="Thumbnail"/></Link>
                    </div>
                    <div className="backTmbMain">
                        <Link to='/sessoes'><img className="tumb" src={tumb2} alt="Thumbnail"/></Link>
                    </div>
                    <div className="backTmbMain">
                        <Link to='/sessoes'><img className="tumb" src={tumb1} alt="Thumbnail"/></Link>
                    </div>

                </article>
            </section>
        </main>
    );
};