import React from "react"
import * as C from './styled'

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
        </C.Buscador>
    )
}