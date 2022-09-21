import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import { Login } from "./pages/login";
import { CrudCartao } from "./pages/cartao";
import { CadastrarUsuario } from "./pages/CadastrarUsuario";

export function Rotas () {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element= {<Login/>} />
                <Route path="/cadastrarUsuario" element= {<CadastrarUsuario/>}/>
                <Route path="/crudcartao" element= {<CrudCartao/>}/>
            </Routes>
        </Router>
    )
}