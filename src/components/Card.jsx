import { useState } from "react";
import { arrayQuests } from "./Decks";

export default function Card(props) {
  const { quest, setResponses, responses } = props;
  const [turned, setTurned] = useState(false);

  function getObj() {
    for (let i = 0; i < arrayQuests.length; i++) {
      if (arrayQuests[i].quest === quest) {
        return i;
      }
    }
    return 0;
  }

  function clickDontRemember() {
    setResponses(responses + 1);
  }

  function clickAlmostRemember() {
    setResponses(responses + 1);
  }

  function clickRemember() {
    setResponses(responses + 1);
  }

  let obj = arrayQuests[getObj()];

  if (!turned) {
    return (
      <>
        <article className="frontCard">
          <h4>{obj.quest}</h4>
          <img
            src="./assets/images/setinha.png"
            alt="setinha para virar card"
            onClick={() => setTurned(true)}
          />
        </article>
      </>
    );
  }
  return (
    <>
      <article className="backCard">
        <h4>{obj.response}</h4>
        <div className="zapResponse">
          <span
            onClick={() => {
              clickDontRemember();
            }}
            className="dontRemember"
          >
            Não lembrei
          </span>
          <span
            onClick={() => {
              clickAlmostRemember();
            }}
            className="almostRemember"
          >
            Quase não lembrei
          </span>
          <span
            onClick={() => {
              clickRemember();
            }}
            className="remember"
          >
            Zap!
          </span>
        </div>
      </article>
    </>
  );
}
