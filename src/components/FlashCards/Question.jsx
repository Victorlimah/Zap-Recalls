import { useState } from "react";
import Card from "./Card";

export default function Question(props) {
  const { index, numberQuestion, setResponses, responses } = props;
  const [questExpand, setQuestExpand] = useState(false);

  if (!questExpand) {
    return (
      <article>
        <h3>Pergunta {numberQuestion}</h3>
        <ion-icon
          name="play-outline"
          onClick={() => expandQuestion()}
        ></ion-icon>
      </article>
    );
  }
  return (
    <Card
      quest={index}
      numberQuestion={numberQuestion}
      setResponses={setResponses}
      responses={responses}
    />
  );

  function expandQuestion() {
    setQuestExpand(true);
  }
}
