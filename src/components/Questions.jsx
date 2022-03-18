import Question from "./Question";
import { arrayQuests } from "./Decks";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export default function Questions() {
  const [questResponse, setQuestResponse] = useState(0);

  function refreshResponses(value) {
    setQuestResponse(value);
  }

  let outroArray = shuffleArray(arrayQuests);
  return (
    <>
      <Header />
      <section className="questions">
        {outroArray.map((quest, index) => (
          <Question
            index={quest.quest}
            numberQuestion={index + 1}
            setResponses={refreshResponses}
            responses={questResponse}
          />
        ))}
      </section>
      <Footer questResponses={questResponse} responses={questResponse} />
    </>
  );
}

export function getArrayLength() {
  return arrayQuests.length;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
