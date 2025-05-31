import { useState } from "react";
import "./App.css";

function App() {
  //const [valor, setValor] = useState('')
  const [inputMarujos, setInputMarujo] = useState("");
  const [inputEvento, setInputEvento] = useState("");
const [viagem, setviagem] = useState("")
  function verificar() {
    if (inputMarujos >= 10 || inputEvento >= 1) {
      setviagem("SIM");
    } else {
    setviagem("NÃO");
    }
   
    setInputEvento("")
    setInputMarujo("")
    
  }
  return (
    <div className="container-app">
      <h2>Ex. 9 - Capitão Ganso</h2>
      <div className="espaco-input">
        {/* Não PODE mecher diretmn no VALOR..???
      setValor é a FUNCAO QUEM atualize o valor 
       */}
        <label htmlFor="">MARUJO </label>
        <div>
          <input
            type="text"
            value={inputMarujos}
            onChange={(e) => setInputMarujo(e.target.value)}
          />
        </div>
        <label htmlFor="">EVENTOS </label>
        <div>
          <input
            type="text"
            value={inputEvento}
            onChange={(e) => setInputEvento(e.target.value)}
          />
        </div>
        <div>
          <button onClick={verificar}>Verificar</button>
        </div>
        {/* <p>{inputMarujos}</p> */}

        <p>Viagem: <strong>{viagem}</strong> </p>
      </div>
    </div>
  );
}

export default App;
