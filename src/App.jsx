import { Component } from "react";
import "./assets/css/estilo.css";
import cronometro from "./assets/img/cronometro.png";

class App extends Component {
  render() {
    return (
      <div className="container">
        <img src={cronometro} className="img" />
        <a className="timer">0.0</a>
        <div className="areaBtn">
          <a className="botao">VAI</a>
          <a className="botao">LIMPAR</a>
        </div>
      </div>
    );
  }
}

export default App;
