import { useState } from 'react'
import Salarys from '../../Mock/Salarys.json'
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'
import * as C from './style'

interface IProps {
    salary: string
    setSalary: React.Dispatch<React.SetStateAction<string>>
}

export const Salary = ({salary, setSalary} : IProps) => {

    const [isOpen, setIsOpen] = useState(false)
    const nameSalary = salary && Salarys.find(item => item.value === salary)?.nome

    return (
        <C.Container 
            isActive={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}
        >
            <span>{nameSalary || 'Ordenado'}</span>
            {isOpen ? <IoMdArrowDropdown/> : <IoMdArrowDropup/>}
                <C.Options isActive={isOpen}>
                    {Salarys.map((item) => (
                        <C.Option
                        isActive={isOpen}
                        key={item.value}
                        onClick={() => setSalary(item.value)}
                        >
                            {item.nome}
                        </C.Option>
                    ))}
                </C.Options>
        </C.Container>
    )
}