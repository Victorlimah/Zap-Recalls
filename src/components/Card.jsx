import { useState } from "react";

export let arrayQuests = [
  (1,
  {
    index: 1,
    quest: "O que é JSX?",
    response: "Uma extensão de linguagem do JavaScript",
  }),
  (2,
  {
    index: 2,
    quest: "O React é __ ",
    response: "uma biblioteca JavaScript para construção de interfaces",
  }),
  (3,
  {
    index: 3,
    quest: "Componentes devem iniciar com __ ",
    response: "letra maiúscula",
  }),
  (4,
  {
    index: 4,
    quest: "Podemos colocar __ dentro do JSX",
    response: "expressões",
  }),
  (5,
  {
    index: 5,
    quest: "O ReactDOM nos ajuda __",
    response: "interagindo com a DOM para colocar componentes React na mesma",
  }),
  (6,
  {
    index: 6,
    quest: "Usamos o npm para __",
    response: "gerenciar os pacotes necessários e suas dependências",
  }),
  (7,
  {
    index: 7,
    quest: "Usamos props para __",
    response: "passar diferentes informações para componentes",
  }),
  (8,
  {
    index: 8,
    quest: "Usamos estado (state) para __",
    response:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  }),
];

export default function Card() {
  const [turned, setTurned] = useState(false);

  if (!turned) {
    return (
      <>
        <article>
          <h4>Oq é JSX?</h4>
          <img
            src="./assets/images/setinha.png"
            alt="setinha para virar card"
            onClick={() => setTurned(true)}
          />
        </article>
      </>
    );
  }
  return (
    <article className="backCard">
      <h4>Resposta aqui irmão Resposta aqui irmão Resposta aqui irmão</h4>
      <div className="zapResponse">
        <span className="dontRemember">Não lembrei</span>
        <span className="almostRemember">Quase não lembrei</span>
        <span className="remember">Zap!</span>
      </div>
    </article>
  );
}
