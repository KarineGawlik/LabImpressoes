import styled from 'styled-components'

export const Secao = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: #fff;
  padding-top: 7px;

  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
  }
`

export const Item = styled.ul`
  text-align: center;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const LinkItem = styled.a`
  text-decoration: none;
  color: #546848;
  font-weight: bold;

  @media (max-width: 768px) {
    display: block;
    padding: 2px 0;
    width: 100%;
    text-align: center;
  }
`

export const ListaLi = styled.li`
  list-style: none;
  display: inline;
  margin-left: 20px;
`
