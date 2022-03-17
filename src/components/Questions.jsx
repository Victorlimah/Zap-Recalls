import Question from "./Question";
import { arrayQuests } from "./Card";

export default function Questions() {
  return (
    <>
      <section className="questions">
        {arrayQuests.map((quest) => (
          <Question index={quest.index} />
        ))}
      </section>
    </>
  );
}

export function getArrayLength() {
  return arrayQuests.length;
}

export let responses = 1;
