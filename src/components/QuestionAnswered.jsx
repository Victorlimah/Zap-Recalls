export default function QuestionAnswered({ numberQuestion, result }) {
  if (result === "true") {
    return (
      <article className="questAnswered">
        <h3 id="questTrue">Pergunta {numberQuestion}</h3>
        <ion-icon id="trueIcon" name="checkmark-circle-sharp"></ion-icon>
      </article>
    );
  } else if (result === "false") {
    return (
      <article className="questAnswered">
        <h3 id="questFalse">Pergunta {numberQuestion}</h3>
        <ion-icon id="falseIcon" name="close-circle-sharp"></ion-icon>
      </article>
    );
  } else if (result === "almost") {
    return (
      <article className="questAnswered">
        <h3 id="questAlmost">Pergunta {numberQuestion}</h3>
        <ion-icon id="almostIcon" name="help-outline"></ion-icon>
      </article>
    );
  }
}
