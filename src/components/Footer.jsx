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
    return (
      <div className="status-icon">
        {arr.map((status) =>
          status === "true" ? (
            <ion-icon id="trueIcon" name={trueIcon}></ion-icon>
          ) : status === "false" ? (
            <ion-icon id="falseIcon" name={falseIcon}></ion-icon>
          ) : (
            <ion-icon id="almostIcon" name={almostIcon}></ion-icon>
          )
        )}
      </div>
    );
  }
}

let trueIcon = "checkmark-circle-sharp";
let falseIcon = "close-circle-sharp";
let almostIcon = "help-circle-sharp";
