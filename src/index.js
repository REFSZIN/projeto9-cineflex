import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/reset.css"
import "./assets/css/style.css"

function App (){
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={} />
                <Route path="/" element={} /> */}
            </Routes> 
        </BrowserRouter>
    );
};

ReactDOM.render(App(), document.querySelector(".root"));