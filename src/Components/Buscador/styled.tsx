import styled from "styled-components";



export const Buscador = styled.div`
    align-items: center;
    background-color: $grey;
    border-radius: 5px;
    display: flex;
    gap: 18px;
    height: 42px;
    justify-content: space-between;
    width: 400px;
`

export const Input = styled.input`
    width: 100%;
    background-color: #ccc;
    border: none;
    font-size: 1.4rem;
    font-weight: bold;
    outline: none;
    &::placeholder {
        color: #4c4d5e;
    }
`