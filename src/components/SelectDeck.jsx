import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { green } from "@mui/material/colors";

export default function SelectDeck() {
  const [deck, setDeck] = React.useState("");

  const handleChange = (event) => {
    setDeck(event.target.value);
  };
  function irRecall() {
    if (deck === "html") {
      alert("voce escolheu html");
    } else if (deck === "react") {
      alert("voce escolheu react");
    } else if (deck === "css") {
      alert("voce escolheu css");
    } else {
      alert("escolha algum");
    }
  }

  return (
    <>
      <Box sx={{ minWidth: 120, width: 230 }}>
        <FormControl fullWidth>
          <InputLabel
            sx={{ backgroundColor: green }}
            id="demo-simple-select-label"
          >
            Escolha seu deck
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={deck}
            label="Deck"
            onChange={handleChange}
          >
            <MenuItem value={"html"}>Recall HTML</MenuItem>
            <MenuItem value={"css"}>Recall CSS</MenuItem>
            <MenuItem value={"react"}>Recall REACT</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <button
        onClick={() => {
          irRecall();
        }}
      >
        Iniciar Recall!{" "}
      </button>
    </>
  );
}
