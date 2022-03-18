import { useState } from "react";
import Card from "./Card";

export default function Question({ index, quest, response }) {
  function expandQuestion() {
    setQuestExpand(true);
  }

  const [questExpand, setQuestExpand] = useState(false);

  if (!questExpand) {
    return (
      <article>
        <h3>Pergunta</h3>
        <ion-icon
          name="play-outline"
          onClick={() => {
            expandQuestion();
          }}
        ></ion-icon>
      </article>
    );
  }
  return <Card quest={index} />;
}
