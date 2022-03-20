import "../../style/reset.css";
import "../../style/main.css";
import Logo from "../../images/logo.png";

export default function Home() {
  return (
    <>
      <img src={Logo} alt="logo zap" />
      <h2>ZapRecall</h2>
    </>
  );
}
