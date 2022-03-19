import EmojisFooter from "./EmojisFooter";
import { getArrayLength } from "./Questions";
import { arrayResponses } from "./Card";

export default function Footer({ questResponses }) {
  if (questResponses === getArrayLength()) {
    if (arrayResponses.includes("false")) {
      return (
        <footer className="missed">
          <span>😥 PUTZ!</span>
          <h2>Ainda faltaram alguns... Mas não desanime!</h2>
          <h5>AQUI FICARÃO OS ICONES</h5>
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
        <h5>AQUI FICARÃO OS ICONES</h5>
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
      <h5>AQUI FICARÃO OS ICONES</h5>
    </footer>
  );
}
