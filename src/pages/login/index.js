import { useState } from "react"
import { Link } from "react-router-dom"
import Logo_darm from "./01.png"
import React from "react";
import './estilo.css'

export function Login (){
    const[cpf, setCpf]= useState("")
    const[senha, setSenha]= useState("")

    function handleLogin(e){
        e.preventDefault()

        if(verificaCPF()) {
            alert("Usuario logado!")

        } else {
            alert("CPF inválido!")
        }
    }

    function verificaCPF (){
        var Soma;
        var Resto;
        Soma = 0;

        const regex = /\d/g;
        let strCPF = cpf.match(regex).join("");

        if (strCPF == "00000000000") 
        return false;

        for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) 
        return false;
        
        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) return false;
        return true;
    }

    return (
        <div className="container">
            <div className="form-content">
                <form onSubmit={handleLogin}>
                    <div className="gfg">
                    <img src={Logo_darm}/>
                    </div>

                    <h1>Faça seu login</h1>

                    <label >CPF</label>
                    <input onChange={(e)=>setCpf(e.target.value)} value={cpf} type="text" placeholder=" "/>
                    <br></br>

                    <label >Senha</label>
                    <input onChange={(e)=>setSenha(e.target.value)} value={senha} type="password" placeholder=" "/>
                    <br></br>

                    <button type="submit">Continuar</button>
                    <br></br>
                    
                    <div className="form-button">
                        <Link to=""><p type="string">Esqueci minha senha</p></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}