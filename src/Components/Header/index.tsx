import { useState } from 'react'
import Buscador from '../Buscador'
import ButtonBurguer from '../ButtonBurguer'
import Filtered from '../Filtered'
import { NavBar } from '../NavBar'
import * as C from './style'
import { IProps } from './types/IProps'

const Header: React.FC <IProps> = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [wait, setWait] = useState('')

    return (
        <>
        <C.Header>
            <C.BoxImg>
               <img src='/Assets/img/logo.svg' alt='' />

                <C.UL>
                    <NavBar/>
                </C.UL>

                <ButtonBurguer onClick={() => setIsOpen(!isOpen)} />
            
                {isOpen ? (
                    <ul className='navi'>
                        <NavBar/>
                    </ul>): (null)}
              
            </C.BoxImg>

            <C.Nav>
                <h1>A casa do código e da massa</h1>
            </C.Nav>

            <section>
                <h3>Buscador</h3>
                <Buscador 
                    type="search"
                    placeholder='Pesquisar'
                    wait={wait}
                    setWait={setWait}
                />
                <Filtered/>
            </section>
        </C.Header>
       
        </>
    )
}

export default Header