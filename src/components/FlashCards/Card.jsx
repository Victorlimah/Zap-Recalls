import { useState } from "react";
import { arrayQuests } from "./Decks";
import QuestionAnswered from "./QuestionAnswered";
import Arrow from "../../images/setinha.png";

export let arrayResponses = [];

export default function Card(props) {
  const { quest, setResponses, responses, numberQuestion } = props;
  const [face, setFace] = useState("front");

  let obj = arrayQuests[getObj()];

  if (face === "answered") {
    return (
      <QuestionAnswered
        numberQuestion={numberQuestion}
        result={arrayResponses[numberQuestion - 1]}
      />
    );
  } else if (face === "front") {
    return (
      <article id="frontCard">
        <h4>{obj.quest}</h4>
        <img
          src={Arrow}
          alt="setinha para virar card"
          onClick={() => setFace("back")}
        />
      </article>
    );
  } else if (face === "back") {
    return (
      <article id="backCard">
        <h4>{obj.response}</h4>
        <div className="zapResponse">
          <span onClick={() => clickDontRemember()} className="dontRemember">
            Não lembrei
          </span>

          <span onClick={() => clickAlmostRemember()} className="almost">
            Quase não lembrei
          </span>

          <span onClick={() => clickRemember()} className="remember">
            Zap!
          </span>
        </div>
      </article>
    );
  }

  function getObj() {
    for (let i = 0; i < arrayQuests.length; i++) {
      if (arrayQuests[i].quest === quest) {
        return i;
      }
    }
    return 0;
  }

  function replyQuest(response) {
    setFace("answered");
    setResponses(responses + 1, response);
    arrayResponses[numberQuestion - 1] = response;
  }
  function clickDontRemember() {
    replyQuest("false");
  }

  function clickAlmostRemember() {
    replyQuest("almost");
  }

  function clickRemember() {
    replyQuest("true");
  }
}
