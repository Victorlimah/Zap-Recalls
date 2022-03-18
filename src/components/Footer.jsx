import { getArrayLength } from "./Questions";

export default function Footer({ questResponses }) {
  return (
    <footer>
      <h2>
        {questResponses}/{getArrayLength()} CONCLUÍDOS
      </h2>
    </footer>
  );
}
