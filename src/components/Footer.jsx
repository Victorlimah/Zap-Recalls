import { getArrayLength } from "./Questions";

export default function Footer({ questResponses }) {
  if (questResponses === getArrayLength()) {
    alert("ganhou");
  }

  return (
    <footer>
      <h2>
        {questResponses}/{getArrayLength()} CONCLUÍDOS
      </h2>
    </footer>
  );
}
