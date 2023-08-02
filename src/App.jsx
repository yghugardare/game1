import { useState } from "react"
import StartGame from "./Components/StartGame"
import PlayGame from "./Components/PlayGame";

function App() {
  const [gameOn,setGameOn] = useState(false);
  return (
   
    <>
    {gameOn? <PlayGame/>:<StartGame gameOn={gameOn} setGameOn={setGameOn}/>}
  
      
    </>
  )
}

export default App
