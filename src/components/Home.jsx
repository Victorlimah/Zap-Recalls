import "../main.css";

export default function Home() {
  function irRecall() {
    alert("indo para o recall");
  }
  return (
    <section>
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
