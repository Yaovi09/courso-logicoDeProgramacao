import { useState } from "react";
import "./App.css";

function App() {
  //const [valor, setValor] = useState('')
  const [inputMarujos, setInputMarujo] = useState("");
  const [inputEvento, setInputEvento] = useState("");
const [viagem, setviagem] = useState("")
const [saberNadar, setSaberNadar] = useState(true);
const [idade, setIdade] = useState();
const [temRecomendacao, setTemRecomendacao] = useState(true)
  function verificar() {
    if (inputMarujos >= 10 || inputEvento >= 1) {
      setviagem("SIM");
    } else {
    setviagem("NÃO");
    }
   
    setInputEvento("")
    setInputMarujo("")

    
  }

  function verificarIdentidade(){
    if(idade > 16 && saberNadar == true){
      alert("Aprovado para o navio")
      
    } else if(temRecomendacao == false || idade >= 14){
        alert("Aprovado sob recomendaçao")
      }
      
    else{
      alert("Reprovado, Volta quando estiver mais preparado para o mar")
    }
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
      <div>
        <input type="text" 
        value={saberNadar}
        onChange={(e)=> setSaberNadar(e.target.value)}
        />
      </div>
      <div>
        <input type="Number"
        value={idade}
        onChange={(e)=>setIdade(e.target.value)}
         />
      </div>
      <div>
        <input type="text" 
        value={temRecomendacao}
        onChange={(e)=>setTemRecomendacao(e.target.value)}
        />
      </div>
      <button onClick={verificarIdentidade}>Imprimir</button>
    </div>
  );
}

export default App;
