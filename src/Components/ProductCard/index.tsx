import { Card, Image, Title, Description } from './styles'

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
      <Image src={image} alt={title}></Image>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  )
}

export default ProductCard
