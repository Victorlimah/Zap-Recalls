import Logo from "../../images/logo-pequeno.png";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="logo do zap recall" />
      <h3>ZapRecall</h3>
    </header>
  );
}
