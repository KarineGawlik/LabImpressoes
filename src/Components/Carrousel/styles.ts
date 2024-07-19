import styled from 'styled-components'

interface WrapperProps {
  backgroundImage: string
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: 100vw;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: -1;
  }
`

export const Text = styled.div`
  position: relative;
  font-family: 'Playwrite HU', cursive;
  color: #293223;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  z-index: 1;
  padding-left: 100px;
  padding-right: 100px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding-left: 50px;
    padding-right: 50px;
    z-index: -1;
  }
`
export const WhatsAppButton = styled.button`
  background-color: #546848;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  z-index: 1;

  &:hover {
    background-color: #d4796d;
  }
`
