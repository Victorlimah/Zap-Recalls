import { useState } from "react";

export let arrayQuests = [
  (1,
  {
    index: "Pergunta 1",
    quest: "O que é JSX?",
    response: "Uma extensão de linguagem do JavaScript",
  }),
  (2,
  {
    index: "Pergunta 2",
    quest: "O React é __ ",
    response: "uma biblioteca JavaScript para construção de interfaces",
  }),
  (3,
  {
    index: "Pergunta 3",
    quest: "Componentes devem iniciar com __ ",
    response: "letra maiúscula",
  }),
  (4,
  {
    index: "Pergunta 4",
    quest: "Podemos colocar __ dentro do JSX",
    response: "expressões",
  }),
  (5,
  {
    index: "Pergunta 5",
    quest: "O ReactDOM nos ajuda __",
    response: "interagindo com a DOM para colocar componentes React na mesma",
  }),
  (6,
  {
    index: "Pergunta 6",
    quest: "Usamos o npm para __",
    response: "gerenciar os pacotes necessários e suas dependências",
  }),
  (7,
  {
    index: "Pergunta 7",
    quest: "Usamos props para __",
    response: "passar diferentes informações para componentes",
  }),
  (8,
  {
    index: "Pergunta 8",
    quest: "Usamos estado (state) para __",
    response:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  }),
];

export default function Card({ id }) {
  const [turned, setTurned] = useState(false);

  function getObj() {
    for (let i = 0; i < arrayQuests.length; i++) {
      if (arrayQuests[i].index === id) {
        return i;
      }
    }
  }

  let obj = arrayQuests[getObj()];

  if (!turned) {
    return (
      <>
        <article className="frontCard">
          <h4>{obj.quest}</h4>
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
      <h4>{obj.response}</h4>
      <div className="zapResponse">
        <span className="dontRemember">Não lembrei</span>
        <span className="almostRemember">Quase não lembrei</span>
        <span className="remember">Zap!</span>
      </div>
    </article>
  );
}
