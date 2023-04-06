import { useState } from "react";

const cars = ['Honda', 'BMW', 'SW']

function App() {
  const [state, setState] = useState()

  const randomGift = () => 
    Math.floor(Math.random()*cars.length)
  
  const handleClick = () => {
    console.log(cars[randomGift]);
    return setState(cars[randomGift()])
  }
  return (
    <div className="App">
      <h1>{state ||"Chua co reward"}</h1>
      <button onClick={handleClick}>Get reward</button>
    </div>
  );
}

export default App;
