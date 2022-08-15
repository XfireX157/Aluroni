import * as C from './style'
import { IProps } from './types/IProps'

const Header: React.FC <IProps> = () => {
    return (
        <C.Header>
            <C.BoxImg>
               <img src='/Assets/img/logo.svg' alt='' />
            </C.BoxImg>
            <C.Nav>
                <h1>A casa do código e da massa</h1>
            </C.Nav>
        </C.Header>
    )
}

export default Header