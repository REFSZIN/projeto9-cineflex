
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/reset.css"
import Screen from "./Pages/Screen";
import Screen1 from "./Pages/Screen1";
import Screen2 from "./Pages/Screen2";
import Screen3 from "./Pages/Screen3";
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