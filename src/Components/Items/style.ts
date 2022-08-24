import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 40px;
    width: 100%;
`

export const item = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
` 
export const ItemImg = styled.div`
    min-width: 240px;
    @media (max-width: $desktop_xsm) {
      width: 100%;
    }
    img {
      border-radius: 8px;
      width: 100%;
    }
` 

export const Description = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 20px;
    @media (max-width: $desktop_xsm) {
      flex-direction: row;
      margin-top: 20px;
      padding: 0;
    }
`

 
export const Title = styled.div`
  h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 20px;
    }
    p {
      color: $dark-grey;
      font-size: 1.3rem;
      font-weight: 600;
      max-width: 600px;
      margin-bottom: 20px;
    }
` 

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
    max-width: 700px;
    @media (max-width: $desktop_xsm) {
      justify-content: flex-end;
    }
    @media (max-width: $mobile) {
      justify-content: flex-start;
    }
    > div {
      margin: 10px;
    }
`

export const Type = styled.div`
    align-items: center;
    border-radius: 2px;
    display: flex;
    font-weight: bold;
    height: 40px;
    justify-content: center;
    padding: 10px 30px;
`

export const Info = styled.div`
    align-items: center;
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    justify-content: center; 
`

export const Value = styled.div`
    color: #d73b3b;
    font-size: 1.7rem;
`


  
  
  