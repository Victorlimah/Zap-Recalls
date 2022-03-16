import Question from "./Question";

const arrayQuests = [
  {
    index: 1,
    quest: "O que é JSX?",
    response: "Uma extensão de linguagem do JavaScript",
  },
  {
    index: 2,
    quest: "O React é __ ",
    response: "uma biblioteca JavaScript para construção de interfaces",
  },
  {
    index: 3,
    quest: "Componentes devem iniciar com __ ",
    response: "letra maiúscula",
  },
  {
    index: 4,
    quest: "Podemos colocar __ dentro do JSX",
    response: "expressões",
  },
  {
    index: 5,
    quest: "O ReactDOM nos ajuda __",
    response: "interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    index: 6,
    quest: "Usamos o npm para __",
    response: "gerenciar os pacotes necessários e suas dependências",
  },
  {
    index: 7,
    quest: "Usamos props para __",
    response: "passar diferentes informações para componentes",
  },
  {
    index: 8,
    quest: "Usamos estado (state) para __",
    response:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];

export default function Questions() {
  return (
    <section className="questions">
      {arrayQuests.map((quest) => (
        <Question index={quest.index} />
      ))}
    </section>
  );
}

export function getArrayLength() {
  return arrayQuests.length;
}
