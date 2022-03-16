import reactDom from "react-dom";
import App from "./components/App";

const elementRoot = document.querySelector(".root");
reactDom.render(<App />, elementRoot);
