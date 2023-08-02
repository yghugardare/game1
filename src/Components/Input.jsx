import React from "react";
import { styled } from "styled-components";

function Input({ input, setInput, err, setErr }) {
  const nums = [1, 2, 3, 4, 5, 6];
  function handleClick(num) {
    setInput(num);
  
    setErr("")
  }
  return (
    <InputContainer>
      <span>&nbsp;{err}</span>
      <div className="flex">
        {nums.map((num, index) => (
          <Box
            isSelected={num === input}
            key={index}
            onClick={() => handleClick(num)}
          >
            {num}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </InputContainer>
  );
}

export default Input;
const InputContainer = styled.div`
 
     display :flex;
    flex-direction: column;
    align-items: end;
   
  span {
    color: #ff0c0c;
    font-family: Poppins;
    font-size: 16px;

    font-weight: 400;
  }
  p {
    font-weight: 600;
  }
  .flex {
    display: flex;
    gap:10px
  }
  @media(max-width:450px) {
    margin: 0 auto;
    align-items: center;
  }
    `
const Box = styled.div`
  height: 64px;
  width: 64px;
  border: 1px solid black;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;
  @media (max-width:450px){
    height: 50px;
  width: 50px;
  }
`;
