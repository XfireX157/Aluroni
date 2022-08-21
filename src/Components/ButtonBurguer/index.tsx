import * as C from './style'

interface IButton {
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const ButtonBurguer: React.FC <IButton> = ({onClick}) => (
    <C.Box onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
    </C.Box>
)

export default ButtonBurguer