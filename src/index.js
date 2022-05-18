
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/reset.css"
import "./assets/css/style.css"
import Screen from "./components/Screen";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import Header from "./components/Header/Header";

function App (){
    return (
        <>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Screen />} />
                <Route path="/sessoes" element={<Screen1 />} />
                <Route path="/assentos" element={<Screen2 />}/>
                <Route path="/pedido" element={<Screen3 />}/>
            </Routes> 
        </BrowserRouter>
        </>
    );
};

ReactDOM.render(App(), document.querySelector(".root"));