import * as C from './style'
import items from '../../Mock/Items.json'

const Items = () => (
    <C.Container>
        {items.map(item => (
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

export default Items