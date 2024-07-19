import React from 'react'
import { FooterContainer, FooterText } from './styles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2024 Laboratório de Impressões. Todos os direitos reservados.
      </FooterText>
      <FooterText>
        Follow us on:
        <a
          href="https://twitter.com/yourcompany"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        ,
        <a
          href="https://facebook.com/yourcompany"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        ,
        <a
          href="https://instagram.com/yourcompany"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
