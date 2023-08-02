import { styled } from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  padding: 15px 20px;
  font-size: medium;
  outline: none;
  border: 2px solid black;
  border-radius: 5px;
  color: white;
  background-color: black;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
    transition: 0.2 ease-out;
  }
`;
// Button2 just inherited Button
export const Button2 = styled(Button)`
  background-color: white;
  color: black;
  cursor: pointer;
  transition: 0.2 ease-out;
  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
    transition: 0.2s ease-in;
  }
`;
