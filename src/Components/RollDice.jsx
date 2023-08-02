import { styled } from "styled-components";

function RollDice({diceNo,rollDice}) {
  const images = {
    1: "https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312625_640.png",
    2: "https://www.pngkit.com/png/detail/644-6446972_vector-stock-black-and-white-dice-clipart-dice.png",
    3: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/2048px-Dice-3-b.svg.png",
    4: "https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312623_1280.png",
    5: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/1024px-Dice-5-b.svg.png",
    6: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Dice-6a-b.svg"
  };
  return (
    
    <Dice>
        <div className="dice" onClick={rollDice}>
            <img src={images[`${diceNo}`]} alt="dice_1" />
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
    .dice>img{
      height: 200px;
      width: 200px;
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