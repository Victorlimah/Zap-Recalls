import { getArrayLength } from "../FlashCards/Questions";
import { arrayResponses } from "../FlashCards/Card";
import { getGoals } from "../App";

export default function Footer({ questResponses, emojis, restart }) {
  let countZapz = 0;
  for (let zaps of emojis) {
    if (zaps === "true") countZapz++;
  }

  if (questResponses === getArrayLength()) {
    if (arrayResponses.includes("false") && getGoals() > countZapz) {
      return (
        <footer className="missed">
          <span>😥 PUTZ!</span>
          <h2>Ainda faltaram alguns... Mas não desanime!</h2>
          {emojisFactory(emojis)}
          <button onClick={() => restart(true)}>
            Voltar para tela inicial
          </button>
        </footer>
      );
    } else if (arrayResponses.includes("false") && getGoals() <= countZapz) {
      return (
        <footer className="missed">
          <span>😬 É, NÉ !?</span>
          <h2>Você esqueceu alguns... Mas bateu a meta!</h2>
          {emojisFactory(emojis)}
          <button onClick={() => restart(true)}>
            Voltar para tela inicial
          </button>
        </footer>
      );
    } else if (getGoals() > countZapz) {
      return (
        <footer className="missed">
          <span>😬 É, NÉ !?</span>
          <h2>Você lembrou todos... Mas não bateu a meta!</h2>
          {emojisFactory(emojis)}
          <button onClick={() => restart(true)}>
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
        <button onClick={() => restart(true)}>Voltar para tela inicial</button>
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
