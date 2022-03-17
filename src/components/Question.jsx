import { useState } from "react";
import Card from "./Card";

export default function Question({ index, quest, response }) {
  function expandQuestion(question) {
    setQuestExpand(true);
  }

  const [questExpand, setQuestExpand] = useState(false);

  if (!questExpand) {
    return (
      <article>
        <h3>{index}</h3>
        <ion-icon
          name="play-outline"
          onClick={() => {
            expandQuestion(index);
          }}
        ></ion-icon>
      </article>
    );
  }
  return <Card id={index} />;
}
