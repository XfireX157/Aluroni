import styled from "styled-components";
import { IProps } from "./types/IProps";

export const Header = styled.header<IProps>`
    max-width: 100%;
    height: 100%;
`

export const BoxImg = styled.div`
    padding: 6px;

    img{
        width: 15%;
    }
`

export const Nav = styled.div`
    max-width: 100%;
    height: 300px;
    background-image: url('/Assets/img/header.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: start;

    h1{
        color: #fff;
        font-family: sans-serif;
        padding: 15px; 
        min-width: 400px;
        width: 40%;
    }
`

