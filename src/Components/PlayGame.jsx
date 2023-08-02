import { useState } from "react";
import { styled } from "styled-components";
import Score from "./Score";
import Input from "./Input";
import RollDice from "./RollDice";
import { Button,Button2 } from "./Button";
import Rules from "./Rules";
function PlayGame() {
    const [score, setScore] = useState(0);
    const [input,setInput] = useState();
    const [err,setErr] = useState("You have not Selected any number");
    const [diceNo,setDiceNo] = useState(1);
    const [rules,setRules] = useState(false);
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      };
    
    function rollDice(){
        if(!input){
            setErr("Select a number , before rolling!!");
            return;
        }
        const randomNumer = generateRandomNumber(1,7);
        setDiceNo(prev=>randomNumer);
        
       
        if(input === randomNumer){
            setScore(prev =>prev+10);
           
            
            }
        else{
            setScore(prev => prev -2);
            
        }
        

    }
    function handleRule(){
        setRules(!rules);
    }
    function handleReset(){
        setScore(0);
        setDiceNo(1);
    }
    
  return (
    <MainContiner>
        <div className="topSection">
            <Score score={score}/>
            <Input input={input} setInput={setInput} err={err} setErr={setErr}/>
        </div>
        <RollDice diceNo={diceNo} rollDice={rollDice}/>
        <div className="btns">
            <Button2 onClick={handleReset}>Reset Score</Button2>
            <Button onClick={handleRule}>{rules? "Hide":"Show"} Rules</Button>
        </div>
        {rules && <Rules/>}
    </MainContiner>
  )
}

export default PlayGame;
const MainContiner = styled.main`
    .topSection{
        max-width: 1180px;
        margin: 15px auto;
        display: flex;
        justify-content: space-between;
    }
    .btns{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;
    }

    @media (max-width:450px) {
      .topSection{
        flex-direction: column;
      }   
    }

`