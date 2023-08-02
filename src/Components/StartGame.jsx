import { styled } from "styled-components";
import {Button} from "./Button"


function StartGame({gameOn,setGameOn}) {
  function handleClick(){
    setGameOn(!gameOn)
  }
  return (
    <Container>
    <div className="image">
        <img src="https://media.istockphoto.com/id/1336400835/vector/cartoon-dice-vector-illustration-on-white-background.jpg?s=612x612&w=0&k=20&c=MfAZZeS5B6eU25J-72mG8Ar-BDAZJgeIPV2jXBr-zjI=" alt="dices" />
    </div>
    <div className="text">
        <h1>DICE GAME</h1>
        <Button onClick={handleClick}>Start Game</Button>
    </div>

    </Container>
  )
}

export default StartGame;
const Container = styled.div`
  display: flex;
  max-width: 1180px;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  h1{
    font-size:64px;
    white-space: nowrap;
  }
  .text{
    align-self: center;
    display: flex;
    flex-direction: column;
  
  }
  .image{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    
  }
  
  @media(max-width: 425px){
    display: flex;
    flex-direction: column;
    gap:40px;
    .image>img{
      width: 400px;
  }

  }
`
