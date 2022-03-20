import { arrayResponses } from "./Card";
import { arrayQuests } from "./Decks";
import { exportEmojis } from "./Footer";

let emoji = "";
export default function EmojisFooter({ emojis }) {
  console.log(emojis + " chegou assim");
  let string = toString(emojis);
  console.log("string> " + string);

  return (
    <div className="status-icon">
      {emojis.length !== 0
        ? arrayResponses.map((status) => {
            if (status === "true") {
              emoji = (
                <ion-icon
                  id="trueIcon"
                  name="checkmark-circle-sharp"
                ></ion-icon>
              );
            } else if (status === "else") {
              emoji = (
                <ion-icon id="falseIcon" name="close-circle-sharp"></ion-icon>
              );
            } else {
              emoji = <ion-icon id="almostIcon" name="help-outline"></ion-icon>;
            }
          })
        : emoji}
    </div>
  );
}
