import { Item, LinkItem, ListaLi, Secao } from './styles'

const Menu = () => {
  return (
    <>
      <Secao>
        <Item>
          <ListaLi>
            <LinkItem href="#">PAPELARIA PERSONALIZADA</LinkItem>
          </ListaLi>
          <ListaLi>
            <LinkItem href="#">PRONTA ENTREGA</LinkItem>
          </ListaLi>
          <ListaLi>
            <LinkItem href="#">ARTES DIGITAIS</LinkItem>
          </ListaLi>
          <ListaLi>
            <LinkItem href="#">SOLICITE SEU ORÇAMENTO</LinkItem>
          </ListaLi>
        </Item>
      </Secao>
    </>
  )
}

export default Menu
