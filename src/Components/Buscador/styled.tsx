import styled from "styled-components";



export const Buscador = styled.div`
    align-items: center;
    border-radius: 5px;
    display: flex;
    height: 42px;
    padding: 12px;
    justify-content: space-between;
    background-color: #ccc;
    width: 400px;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background-color: transparent;
    outline: none;
    &::placeholder {
        color: #4c4d5e;
    }
`