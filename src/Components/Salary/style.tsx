import styled from "styled-components";

interface IPropsSalary {
    isActive?: boolean
}

export const Container = styled.section<IPropsSalary>`
  align-items: center;
  background-color: #ccc;
  border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  height: 40px;
  justify-content: space-between;
  cursor: pointer;
  min-width: 240px;
  padding: 0 40px;
  position: relative;

  ${({isActive}) => isActive && `
        &{
            background-color: blue;
            color: white; 
        }
  `}
`

export const Options = styled.article<IPropsSalary>`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    flex-direction: column;
    width: 100%;
    ${({isActive}) => isActive && `
        &{
            display: flex;
        }
    `}
`

export const Option = styled.div<IPropsSalary>`
    align-items: center;
    background-color: #ccc;
    border-top: 2px solid #7c7676;
    box-sizing: border-box;
    color: #000;
    display: flex;
    height: 40px;
    justify-content: center;
    width: inherit;
    ${({isActive}) => isActive && `
        &:hover{
            background-color: #4427e4;
            color: #ffffff;
        }
    `}
     
` 