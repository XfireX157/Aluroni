import { List } from '../../Mock/List'
import * as C from './style'

export const NavBar = () => {
    return(
        <>
        {List.map((item) => (
            <C.List key={item.id}>
                <C.Icon> {item.icon} </C.Icon>
                <C.Title> {item.name} </C.Title>
            </C.List>
        ))}
           
        </>
    )
   
}