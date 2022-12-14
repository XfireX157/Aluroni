import { useState } from 'react'
import Buscador from '../Search'
import ButtonBurguer from '../ButtonBurguer'
import Filtered from '../Filtered'
import Items from '../Items'
import { NavBar } from '../NavBar'
import { Salary } from '../Salary'
import * as C from './style'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [wait, setWait] = useState('')
    const [filtered, setFiltered] = useState<number | null>(null) 
    const [salary, setSalary] = useState('')
    return (
        <>
        <C.Header>
            <C.BoxImg>
                <div>
                    <img src='/Assets/img/logo.svg' alt='' />
                    <C.UL>
                        <NavBar/>
                    </C.UL>
                </div>

                <ButtonBurguer onClick={() => setIsOpen(!isOpen)} />
            
                {isOpen ? (
                    <C.UlMobile>
                        <NavBar/>
                    </C.UlMobile>): (null)}
            </C.BoxImg>

            <C.Nav>
                <h1>A casa do código e da massa</h1>
            </C.Nav>
        </C.Header>
            <C.Search>
                <h3>Buscador</h3>
                <Buscador 
                    type="search"
                    placeholder='Pesquisar'
                    wait={wait}
                    setWait={setWait}
                />
                <C.Box>
                    <Filtered filtered={filtered} setFiltered={setFiltered} />
                    <Salary salary={salary} setSalary={setSalary} />
                </C.Box>
                <Items filtered={filtered} wait={wait} salary={salary}  />
            </C.Search>
        </>
    )
}

export default Header