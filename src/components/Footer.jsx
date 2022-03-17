import { getArrayLength } from "./Questions";

export default function Footer() {
  return (
    <footer>
      <h2>
        {0}/{getArrayLength()} CONCLUÍDOS
      </h2>
    </footer>
  );
}
