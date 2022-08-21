import styled from "styled-components";
import { IPropsList } from "./Types/IProps";

export const List = styled.li<IPropsList>`
    width: 100%;
`

export const Icon = styled.span<IPropsList>`
    font-size: 1rem;
`

export const Title = styled.span<IPropsList>`
    font-size: 0.8rem;
`