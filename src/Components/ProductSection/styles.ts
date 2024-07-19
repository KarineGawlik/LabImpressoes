import styled from 'styled-components'

export const ProductSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  justify-content: center;
  padding: 80px;
`
export const ProductCardWrapper = styled.div`
  flex: 1 1 calc(33.333% - 32px);
  box-sizing: border-box;
  margin: 16px;
  max-width: calc(33.333% - 32px);

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 32px);
    max-width: calc(50% - 32px);
  }

  @media (max-width: 480px) {
    flex: 1 1 cacl(100% - 32px);
    max-width: calc(100% - 32px);
  }
`
