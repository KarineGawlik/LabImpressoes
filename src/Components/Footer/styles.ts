import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #546848;
  padding: 20px;
  text-align: center;
  color: white;
  left: 0;
  bottom: 0;
  width: 100%;
`

export const FooterText = styled.p`
  margin: 5px 0;

  a {
    color: #d4796d;
    margin: 0 5px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
