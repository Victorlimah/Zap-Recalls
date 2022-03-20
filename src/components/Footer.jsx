import EmojisFooter from "./EmojisFooter";
import { getArrayLength } from "./Questions";
import { arrayResponses } from "./Card";

export default function Footer({ questResponses, emojis }) {
  console.log("rodando footer");
  console.log(emojis);

  if (questResponses === getArrayLength()) {
    if (arrayResponses.includes("false")) {
      return (
        <footer className="missed">
          <span>😥 PUTZ!</span>
          <h2>Ainda faltaram alguns... Mas não desanime!</h2>
          {emojisFactory(emojis)}
          <button onClick={() => document.location.reload()}>
            Voltar para tela inicial
          </button>
        </footer>
      );
    }
    return (
      <footer className="congrats">
        <span>🥳 PARABÉNS!</span>
        <h2>Você não esqueceu de nenhum flashcard!</h2>
        {emojisFactory(emojis)}
        <button onClick={() => document.location.reload()}>
          Voltar para tela inicial
        </button>
      </footer>
    );
  }

  return (
    <footer>
      <h2>
        {questResponses}/{getArrayLength()} CONCLUÍDOS
      </h2>
      {emojisFactory(emojis)}
    </footer>
  );

  function emojisFactory(arr) {
    let emoji = "";

    if (arr.length !== 0) {
      arr.map((status) => {
        if (status === "true") {
          emoji = <ion-icon id="trueIcon" name={trueIcon}></ion-icon>;
        } else if (status === "false") {
          emoji = <ion-icon id="falseIcon" name={falseIcon}></ion-icon>;
        } else if (status === "almost") {
          emoji = <ion-icon id="almostIcon" name={almostIcon}></ion-icon>;
        }
      });
    }

    //return <div className="status-icon">{emoji}</div>;

    return (
      <div className="status-icon">
        {arr.map((status) => (
          <ion-icon id="falseIcon" name={falseIcon}></ion-icon>
        ))}
      </div>
    );

    return (
      <div className="status-icon">
        {arr.map((status) => {
          let name = "";
          <ion-icon id="falseIcon" name={falseIcon}></ion-icon>;
        })}
      </div>
    );
  }
}

let trueIcon = "checkmark-circle-sharp";
let falseIcon = "close-circle-sharp";
let almostIcon = "help-outline";
