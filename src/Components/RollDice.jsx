import { styled } from "styled-components";

function RollDice({diceNo,rollDice}) {

  return (
    
    <Dice>
        <div className="dice" onClick={rollDice}>
            <img src={`src/Images/dice_${diceNo}.png`} alt="dice_1" />
        </div>
        <p>
            Click on Dice to roll
        </p>
    </Dice>
  )
}

export default RollDice;
const Dice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p{
        font-size: 20px;
        font-weight: 600;
        line-height: 10px;
        letter-spacing: 1px;
    }
    .dice{
        cursor: pointer;
        
    }
    .dice:active{
      animation-name: rotate;
      animation-duration: 0.2s;
      animation-iteration-count:10;
    }
    @keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`