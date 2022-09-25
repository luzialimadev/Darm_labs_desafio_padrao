import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cadastro } from "./cadastro";
import "../../components/cartao/styleCard.css";

export function CadCartao() {
  const [nome, setNome] = useState("");
  const [tipoConta, settipoConta] = useState("CC");
  const [tipoCartao, settipoCartao] = useState("");

  const navigate = useNavigate();

  function handlecadCartao(e) {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <>
      <Cadastro />
    </>
  );
}
