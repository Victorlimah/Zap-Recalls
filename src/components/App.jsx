import { useState } from "react";
import Home from "./Home";
import Questions from "./Questions";

export default function App() {
  const [visible, setVisible] = useState(true);

  function goRecall() {
    setVisible(false);
  }
  if (visible) {
    return (
      <section>
        <Home />
        <button
          className="goRecall"
          onClick={() => {
            goRecall();
          }}
        >
          Iniciar Recall!
        </button>
      </section>
    );
  }
  return (
    <>
      <Questions />
    </>
  );
}
