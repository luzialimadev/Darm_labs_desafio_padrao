import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import { Login } from "./pages/login";
import { CadastrarUsuario } from "./pages/CadastrarUsuario";
import { CadCartao } from "./pages/CadCartao";

export function Rotas () {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element= {<Login/>} />
                <Route path="/CadastrarUsuario" element= {<CadastrarUsuario/>}/>
                <Route path="/CadCartao" element= {<CadCartao/>} />
            </Routes>
        </Router>
    )
}