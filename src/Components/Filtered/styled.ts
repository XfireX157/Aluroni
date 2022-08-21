import styled, {css} from "styled-components";

interface IButton {
  isActive?: boolean
}

export const Box = styled.div`
  gap: 24px;
  flex-wrap: wrap;
  margin: 20px 0;
  display: flex;
  justify-content: start;
  align-items: center;
`

export const Button = styled.button<IButton>`
  padding: 16px;
  background-color: $grey;
  border-radius: 4px;
  background-color: #ccc;
  font-size: 1.25rem;
  font-weight: bold;

  ${({isActive}) => isActive ? `
    background-color: #000;
    color: #fff;
  `: `
    background-color: #ccc
  `}
  
`