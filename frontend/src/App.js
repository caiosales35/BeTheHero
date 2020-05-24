import React, {useState} from 'react';
import Header from './Header';


function App() {
  let [counter, setCounter] = useState(0);
  // retorn Array[valor, funcao de atualizacao do valor]

  function increment(){
      setCounter(counter+1);
  } 

  return (
      <div>
          <Header title="Semana Omnistack">
                Contador: {counter}
          </Header>
          <button onClick={increment}>Incrementar</button>
      </div>
  )
}

export default App;
