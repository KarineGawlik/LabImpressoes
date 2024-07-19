import { Wrapper, Text, WhatsAppButton } from './styles'
import carrousel from '../../Assets/Imagens/carrousel.jpg'

const Carrousel = () => {
  return (
    <>
      <Wrapper backgroundImage={carrousel}>
        <Text>
          Design de impressão: Lidamos com todos os aspectos do design de
          impressão, desde cartões de visita e papéis timbrados até embalagens
          de produtos e materiais promocionais, garantindo a consistência da sua
          marca
          <br />
          <br />
          Faça seu orçamento conosco!
        </Text>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppButton>SOLICITE SEU ORÇAMENTO AQUI</WhatsAppButton>
        </a>
      </Wrapper>
    </>
  )
}

export default Carrousel
