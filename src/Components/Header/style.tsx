import styled from "styled-components";

const Media = {
    Tablet: "@media(min-width: 768px)"
}

export const Header = styled.header`
    max-width: 100%;
    height: 100%;
   
`

export const UlMobile = styled.ul`
    ${Media.Tablet}{
        display: none;
    }
   
`

export const UL = styled.ul`
    display: none;

    ${Media.Tablet}{
        display: flex;
    }
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

export const Search = styled.section`
    max-width: 80%;
    height: 100%;
    margin: 0 auto;
    margin-top: 30px;
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`