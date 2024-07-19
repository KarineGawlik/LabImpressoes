import React from 'react'
import { Card, CardImage, CardTitle, CardDescription } from './styles'

interface ProductCardProps {
  image: string
  title: string
  description: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description
}) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  )
}

export default ProductCard
