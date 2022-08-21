import React, { useRef, useState } from 'react'
import filter from './filter.json'
import * as C from './styled'

type IOpcao = typeof filter[0]

export default function Filtered(){
    const [filtered, setFiltered] = useState<number | null>()
    
    function selectFilter(item: IOpcao) {
       if(filtered !== item.id){
            setFiltered(item.id) 
       }else{
            setFiltered(null)
        }   
    }

    return(
        <C.Box> 
           {filter.map((item) => (
                <C.Button 
                isActive={filtered === item.id ? true : false} 
                key={item.id} 
                onClick={() => 
                selectFilter(item)
            }> {item.label} </C.Button>
           ))} 
        </C.Box>
    )
}