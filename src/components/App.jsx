import { useState } from "react";
import Questions from "./FlashCards/Questions";
import Home from "./Structure/Home";

let goals = 0;

export default function App() {
  const [visible, setVisible] = useState(true);

  function goRecall(value) {
    setVisible(value);
  }
  return visible ? (
    <section>
      <Home />
      <form>
        <label for="goalsZap">Digite sua meta de zaps...</label>
        <input
          type="number"
          min="1"
          name="goalsZap"
          placeholder="0"
          onChange={(goal) => setGoals(goal.target.value)}
        />
      </form>
      <button className="goRecall" onClick={() => goRecall(false)}>
        Iniciar Recall!
      </button>
    </section>
  ) : (
    <Questions restart={goRecall} />
  );
}

function setGoals(goal) {
  goals = goal;
}

export function getGoals() {
  return goals;
}
