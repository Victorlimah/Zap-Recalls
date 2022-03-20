import { useState } from "react";
import Questions from "./FlashCards/Questions";
import Home from "./Structure/Home";

export default function App() {
  const [visible, setVisible] = useState(true);

  return visible ? (
    <section>
      <Home />
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
