import { arrayResponses } from "./Card";
import { arrayQuests } from "./Decks";
let emoji = "";
export default function EmojisFooter() {
  <div className="status-icon">
    {arrayQuests.length !== 0
      ? arrayResponses.map((status, i) => {
          if (status === "true") {
            emoji = (
              <ion-icon id="trueIcon" name="checkmark-circle-sharp"></ion-icon>
            );
          } else if (status === "else") {
            emoji = (
              <ion-icon id="falseIcon" name="close-circle-sharp"></ion-icon>
            );
          } else if (status === "almost") {
            emoji = <ion-icon id="almostIcon" name="help-outline"></ion-icon>;
          } else {
            emoji = <h1> deu merda </h1>;
          }
          return emoji;
        })
      : emoji}
  </div>;
}
