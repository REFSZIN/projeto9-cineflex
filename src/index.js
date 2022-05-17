
import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/reset.css"
import "./assets/css/style.css"
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App (){
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

ReactDOM.render(App(), document.querySelector(".root"));