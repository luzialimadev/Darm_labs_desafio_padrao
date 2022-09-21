import { useState } from "react"
import React from "react";
import './estiloUsuario.css'

export function CadastrarUsuario (){
    const[nome, setNome]= useState("")
    const[email, setEmail]= useState("")
    const[cpf, setCpf]= useState("")
    const[telefone, setTelefone]= useState("")
    const[endereco, setEndereco]= useState("")
    const[tipoConta, settipoConta]= useState("CC")
    const[senha, setSenha]= useState("")
    const[confSenha, setconfSenha]= useState("")

    const handleChange =(e)=>{
        setNome(e.target.value);
    }
    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
    }
    const handleCpfChange =(e)=>{
        setCpf(e.target.value);
    }
    const handleTelefoneChange =(e)=>{
        setTelefone(e.target.value);
    }
    const handleEnderecoChange =(e)=>{
        setEndereco(e.target.value);
    }
    const handleSenhaChange =(e)=>{
        setSenha(e.target.value);
    }
    const handleConfSenhaChange =(e)=>{
        setconfSenha(e.target.value);
    }
    const CadastrarUsuario=(e)=>{
        if(senha!=confSenha)
        {
          
          alert("Senha não corresponde");
        }
        else{
          
          alert('Sua conta foi criada no nome de: "' + nome +
          '", com o Email :"' + email + '"');
        }
        e.preventDefault();

    }
    return (
    <div className="box">
        <div className="class-box">
            <header className="form-content">
                <form onSubmit={(e)=> {CadastrarUsuario(e)}}>
                    <h2>Faça seu cadastro</h2>
                        <label >Nome:</label>
                        <br/>
                        <input type="text" value={nome} required onChange={(e)=> {handleChange(e)}} />
                        <br/>

                        <label>Email:</label>
                        <br/>
                        <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} />
                        <br/>

                        <label>CPF:</label>
                        <br/>
                        <input type="text" value={cpf} required onChange={(e)=> {handleCpfChange(e)}} />
                        <br/>

                        <label>Telefone:</label>
                        <br/>
                        <input type="number" value={telefone} required onChange={(e)=> {handleTelefoneChange(e)}} />
                        <br/>

                        <label>Endereço:</label>
                        <br/>
                        <input type="text" value={endereco} required onChange={(e)=> {handleEnderecoChange(e)}} />
                        <br/>

                        <label>Tipo de Conta:</label>
                        <br/>
                        <br/>
                        <select onChange={(e)=>settipoConta(e.target.selectedOptions[0].value)}>
                            <option value="CC">Conta Corrente</option>
                            <option value="CP">Conta Poupança</option>
                        </select>
                        <br/>
                        <br/>
                    
                        <label>Senha:</label>
                        <br/>
                        <input type="password" value={senha} required onChange={(e)=> {handleSenhaChange(e)}} />
                        <br/>

                        <label>Confirma Senha:</label>
                        <br/>
                        <input type="password" value={confSenha} required onChange={(e)=> {handleConfSenhaChange(e)}} />
                        <br/>
                        <button type="submit" value="Submit">Confirmar</button>
                    </form>
                </header>
            </div>
        </div>
    );
}




























  
