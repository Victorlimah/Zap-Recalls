import { useState } from "react";
import Questions from "./FlashCards/Questions";
import Home from "./Structure/Home";

let goals = 0;

export default function App() {
  const [visible, setVisible] = useState(true);

  return visible ? (
    <section>
      <Home />
      <input
        type="number"
        min="1"
        placeholder="Digite sua meta de zaps..."
        onChange={(goal) => setGoals(goal.target.value)}
      />
      <button className="goRecall" onClick={() => goRecall()}>
        Iniciar Recall!
      </button>
    </section>
  ) : (
    <Questions />
  );

  function goRecall() {
    setVisible(false);
  }
}

function setGoals(goal) {
  goals = goal;
}

export function getGoals() {
  return goals;
}
