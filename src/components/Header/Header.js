import "./style.css"
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png"
export default function Header(){
    return(
        <header>
        <Link to='/'><img src={Logo} alt="Logo"/><h1>CINEFLEX</h1></Link>
        </header>
    );
};