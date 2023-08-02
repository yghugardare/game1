import { styled } from "styled-components";

function Score({ score }) {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>TOTAL SCORE</p>
    </ScoreContainer>
  );
}

export default Score;
const ScoreContainer = styled.div`
 max-width: 200px;
 text-align: center;
 /* margin-top: 40px; */
  h1 {
    font-size: 4rem;
    font-weight: 500;
    line-height: 80px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
  @media (max-width:450px) {
    margin: 0 auto;
  }
  h1{
    font-size: 3.5rem;
  }
  p{
    font-size: 18px;
  }
`;
