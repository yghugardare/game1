import { styled } from "styled-components";
import {Button} from "./Button"


function StartGame({gameOn,setGameOn}) {
  function handleClick(){
    setGameOn(!gameOn)
  }
  return (
    <Container>
    <div className="image">
        <img src="src/Images/dices.png" alt="dices" />
    </div>
    <div className="text">
        <h1>DICE GAME12</h1>
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
