import * as C from './style'
import items from '../../Mock/Items.json'
import { useEffect, useState } from 'react' 

interface IProps {
    filtered: number | null
    wait: string
    salary: string
}

const Items = (props: IProps) => {

    const [list, setList] = useState(items)
    const {wait, filtered, salary} = props

    function testeBusca(title: string) {
        const regex = new RegExp(wait)
        return regex.test(title)
    }

    function ordenar(newList: typeof items) {
        switch(salary) {
            case 'porcao':
                return newList.sort((a, b) =>  a.size > b.size ? 1 : -1)
            case 'qtd_pessoas':
                return newList.sort((a, b) => a.serving > b.serving ? 1 : -1)
            case 'preco':
                return newList.sort((a, b) => a.price > b.price ? 1 : -1)
            default:
               return newList
        }
    }

    function testaFilter(id: number){
        if(filtered !== null) return filtered === id 
        return true
    }

    useEffect(() => {
        const newList = items.filter(item => testeBusca(item.title) && testaFilter(item.category.id))
        setList(ordenar(newList))
    }, [wait, filtered, salary])
 
    return(    

        <C.Container>
        {list.map(item => (
            <C.item key={item.id}>
                <C.ItemImg>
                    <img src={item.photo} alt={item.title} />
                </C.ItemImg>
                <C.Description>
                    <C.Title>
                        <h2> {item.title} </h2>
                        <p> {item.description} </p>
                    </C.Title>
                    <C.Tags>
                        <C.Type> {item.category.label} </C.Type>
                        <C.Info> {item.size}g </C.Info>
                        <C.Info> Serve {item.serving} pessoa{item.serving === 1 ? '' : 's'} </C.Info>
                        <C.Value> R$ {item.price.toFixed(2).replace('.', ',')} </C.Value>
                    </C.Tags>
                </C.Description>
            </C.item>
        ))}
    </C.Container>
    )
} 

export default Items