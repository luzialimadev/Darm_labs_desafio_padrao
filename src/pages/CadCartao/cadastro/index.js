import React, { useState } from "react";
import visa from "../visa.png";
import mastercard from "../mastercard.png";
import elo from "../logo-cartao-elo-preto-48.png";
import americanExpress from "../american-express.png";
import hipercard from "../logo-hipercard-48.png";
import "../../../components/cartao/styleCard.css";

export function Cadastro() {
  const [bandeira, setBandeira] = useState("visa");
  const [nome, setNome]= useState("");
  const [numeroCartao, setNumeroCartao]= useState("");;
  const [tipoCartao, settipoCartao]= useState("");
  const[validade, setValidade]= useState("");
  const[cvc, setCvc]= useState("");

  let flagImage = visa;
  function changeFlagImage() {
    switch (bandeira) {
      case "visa":
        flagImage = visa;
        break;
      case "mastercard":
        flagImage = mastercard;
        break;
      case "elo":
        flagImage = elo;
        break;
      case "americanExpress":
        flagImage = americanExpress;
        break;
      case "hipercard":
        flagImage = hipercard;
        break;
    }
    return flagImage;
  }

  return (
<div className="card_supre">
    <div className="card card_esc">
      <div className="flag">
        <div className="flag_image">
          <img src={changeFlagImage()}></img>
        </div>
        <select
          onChange={(e) => setBandeira(e.target.selectedOptions[0].value)}
        >
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
          <option value="elo">Elo</option>
          <option value="americanExpress">American-Express</option>
          <option value="hipercard">Hipercard</option>
        </select>
      </div>

      <div className="card_number">
        <input
         type="text"
         className="text"
         onChange={(e)=>setNumeroCartao(e.target.value)} 
         value={numeroCartao} 
         placeholder="0000 0000 0000 0000"
         maxLength="19"
         />
      </div>

      <div className="card_infor">
        <div className="card_info_name">
          <span className="title">Nome</span>
          <input
            type="text"
            onChange={(e)=>setNome(e.target.value)}
            className="text small"
            value={nome}
            placeholder="Luciana M Silva"
            maxLength="30"
          />
        </div>

        <div className="card-expiration-cvc">
          <div className="card_info_date">
            <span className="title">Validade</span>
            <input
              type="text"
              className="text small"
              onChange={(e)=>setValidade(e.target.value)}
              value={validade}
              placeholder="09/23"
              maxLength="5"
            />
          </div>

          <div className="card_info_date">
            <span className="title">CVC</span>
            <input
              type="text"
              className="text small"
              onChange={(e)=>setCvc(e.target.value)}
              value={cvc}
              placeholder="303"
              maxLength="3"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
