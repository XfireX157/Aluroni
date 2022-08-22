import React from "react"
import * as C from './styled'
import { CgSearch } from "react-icons/cg";

interface IProps {
    type?: React.HTMLInputTypeAttribute
    wait: string
    setWait: React.Dispatch<React.SetStateAction<string>>
    placeholder?: string
}

export default function Buscador  ({type ,wait, setWait, placeholder}: IProps) {

    return(
        <C.Buscador>
            <C.Input 
                type={type}
                placeholder={placeholder}
                value={wait}
                onChange={(e) => setWait(e.target.value)}
            />
            <CgSearch size={20} color="#4C4D5E" />
        </C.Buscador>
    )
}