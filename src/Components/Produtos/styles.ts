import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  margin: 16px;
`

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 16px;
`

export const CardDescription = styled.p`
  font-size: 1rem;
  margin: 16px;
  color: #666;
`

export const ProductSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 16px;
  background-color: #f5f5f5;
`
