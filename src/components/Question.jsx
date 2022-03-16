export default function Question({ index }) {
  function expandQuestion(question) {
    alert("vamos expandir a questão: " + question);
  }

  return (
    <article>
      <h3>Pergunta {index}</h3>
      <ion-icon
        name="play-outline"
        onClick={() => {
          expandQuestion(index);
        }}
      ></ion-icon>
    </article>
  );
}
