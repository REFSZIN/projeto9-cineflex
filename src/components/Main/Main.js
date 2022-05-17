import "./style.css"
import Aside from "../Aside/Aside";
import tumb1 from "../../assets/images/tumb1.png"
import tumb2 from "../../assets/images/tumb2.png"
export default function Main (){
    return(
        <main>
            <section className="main">
                <h2>Selecione o filme</h2>
                <article className="listTumbs">
                    <div className="backTmbMain">
                        <img className="tumb" src={tumb1} alt="Thumbnail"/>
                    </div>
                    <div className="backTmbMain">
                        <img className="tumb" src={tumb2} alt="Thumbnail"/>
                    </div>
                    <div className="backTmbMain">
                        <img className="tumb" src={tumb1} alt="Thumbnail"/>
                    </div>
                    <div className="backTmbMain">
                        <img className="tumb" src={tumb2} alt="Thumbnail"/>
                    </div>
                    <div className="backTmbMain">
                        <img className="tumb" src={tumb1} alt="Thumbnail"/>
                    </div>
                    <div className="backTmbMain">
                        <img className="tumb" src={tumb2} alt="Thumbnail"/>
                    </div>
                    <div className="backTmbMain">
                        <img className="tumb" src={tumb1} alt="Thumbnail"/>
                    </div>

                </article>
            </section>
            <Aside />
        </main>
    );
};