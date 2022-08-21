import styled from "styled-components";


const Media = {
    Tablet: "@media(min-width: 768px)"
}

export const Box = styled.div`
    position: relative;
    width: 85px;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid red;

    span{
        position: absolute;
        width: 40px;
        height: 3px;
        border-radius: 40px;
        background-color: #000;
        transition: 0.5s;

        &:nth-child(1){
            transform: translateY(13px);
        }

        &:nth-child(2){
            transform: translateY(-13px);
        }
    }

    ${Media.Tablet}{
        display: none;
    }
    
`