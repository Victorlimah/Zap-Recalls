import { useState } from "react";
import "../main.css";
import Footer from "./Footer";
import Header from "./Header";
import Questions from "./Questions";

export default function Home() {
  const [visible, setVisible] = useState(true);

  function irRecall() {
    setVisible(false);
  }

  if (visible) {
    return (
      <section className="home">
        <img src="assets/images/logo.png" alt="logo zap" />
        <h2>ZapRecall</h2>
        <button
          onClick={() => {
            irRecall();
          }}
        >
          Iniciar Recall!
        </button>
      </section>
    );
  }
  return (
    <>
      <Header />
      <Questions />
      <Footer />
    </>
  );
}
