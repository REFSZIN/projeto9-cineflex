
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/global.js"
import Screen from "./Pages/Screen";
import Screen1 from "./Pages/Screen1";
import Screen2 from "./Pages/Screen2";
import Screen3 from "./Pages/Screen3";
import Header from "./components/Header/Header";
import ResetCSS from './assets/css/global.js'

function App (){
    return (
        <>
        <BrowserRouter>
        <ResetCSS />
        <Header />
            <Routes>
                <Route path="/" element={<Screen />} />
                <Route path="/sessoes/:id" element={<Screen1 />} />
                <Route path="/assentos/:idSection" element={<Screen2 />}/>
                <Route path="/pedido" element={<Screen3 />}/>
            </Routes> 
        </BrowserRouter>
        </>
    );
};

ReactDOM.render(App(), document.querySelector(".root"));