import { getArrayLength } from "./Questions";

export default function Footer() {
  let responses = 0;
  return (
    <footer>
      <h2>
        {responses}/{getArrayLength()} CONCLUÍDOS
      </h2>
    </footer>
  );
}
