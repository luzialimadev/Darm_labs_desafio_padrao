import { useState } from "react"
import React from "react";

export function CrudCartao() {
    const[nome]= useState("")
    const[email]= useState("")
    const[cpf]= useState("")
    const[telefone]= useState("")
    const[endereco]= useState("")
    const[tipo_conta]= useState("")
    const[senha]= useState("")
    const[conf_senha]= useState("")

    function handleLogin(e){
        e.preventDefault()
        console.log(nome,email,cpf,telefone,endereco,tipo_conta,senha,conf_senha)
    }

    return (
        <h1>Hello Crud_cartao!!</h1>
    )
}