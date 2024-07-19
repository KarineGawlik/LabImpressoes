import { Imagem, Logo } from './styles'
import logo from '../../Assets/Imagens/logoLab.png'

const Header = () => {
  return (
    <Logo>
      <Imagem src={logo}></Imagem>
    </Logo>
  )
}

export default Header
