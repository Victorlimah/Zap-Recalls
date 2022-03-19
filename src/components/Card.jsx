import { useState } from "react";
import { arrayQuests } from "./Decks";
import QuestionAnswered from "./QuestionAnswered";

let arrayResponses = ["", "", "", "", "", "", "", ""];
export default function Card(props) {
  const { quest, setResponses, responses, numberQuestion } = props;
  const [face, setFace] = useState("front");

  function getObj() {
    for (let i = 0; i < arrayQuests.length; i++) {
      if (arrayQuests[i].quest === quest) {
        return i;
      }
    }
    return 0;
  }

  function clickDontRemember() {
    setFace("answered");
    arrayResponses[numberQuestion - 1] = "false";
    console.log(arrayResponses);
    setResponses(responses + 1);
  }

  function clickAlmostRemember() {
    setFace("answered");
    arrayResponses[numberQuestion - 1] = "almost";
    setResponses(responses + 1);
  }

  function clickRemember() {
    setFace("answered");
    arrayResponses[numberQuestion - 1] = "true";
    console.log(arrayResponses[numberQuestion - 1]);
    setResponses(responses + 1);
  }

  let obj = arrayQuests[getObj()];

  if (face === "answered") {
    console.log(arrayResponses);
    return (
      <>
        <QuestionAnswered
          numberQuestion={numberQuestion}
          result={arrayResponses[numberQuestion - 1]}
        />
      </>
    );
  } else if (face === "front") {
    return (
      <>
        <article className="frontCard">
          <h4>{obj.quest}</h4>
          <img
            src="./assets/images/setinha.png"
            alt="setinha para virar card"
            onClick={() => setFace("back")}
          />
        </article>
      </>
    );
  } else if (face === "back") {
    return (
      <>
        <article className="backCard">
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
      </>
    );
  }
}
