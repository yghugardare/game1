
import { styled } from 'styled-components';

function Rules() {
  return (
    <RulesContainer>
        <h1>How To Play Dice Game?</h1>
        <br />
        <ol className="text">
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>After click on  dice  if selected number is equal to dice number you will get same point as dice </li>
            <li>If you get wrong guess then  2 point will be dedcuted </li>
        </ol>
    </RulesContainer>
  )
}

export default Rules;
const RulesContainer = styled.div`

    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #FBF1F1;
    border: 2px solid #fd9b9b;
    flex-wrap: wrap;


`