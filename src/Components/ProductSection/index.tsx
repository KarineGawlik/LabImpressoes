import ProductCard from '../ProductCard'
import { ProductSection } from './styles'

import produto1 from '../../Assets/Imagens/produto (1).jpeg'
import produto2 from '../../Assets/Imagens/produto (2).jpeg'
import produto3 from '../../Assets/Imagens/produto (3).jpeg'
import produto4 from '../../Assets/Imagens/produto (4).jpeg'
import produto5 from '../../Assets/Imagens/produto (5).jpeg'
import produto6 from '../../Assets/Imagens/produto (6).jpeg'
import produto7 from '../../Assets/Imagens/produto (7).jpeg'
import produto8 from '../../Assets/Imagens/produto (8).jpeg'
import produto9 from '../../Assets/Imagens/produto (9).jpeg'

const products = [
  {
    image: produto1,
    title: 'Produto 1',
    description: 'Descrição do produto 01'
  },
  {
    image: produto2,
    title: 'Produto 2',
    description: 'Descrição do produto 01'
  },
  {
    image: produto3,
    title: 'Produto 3',
    description: 'Descrição do produto 01'
  },
  {
    image: produto4,
    title: 'Produto 4',
    description: 'Descrição do produto 01'
  },
  {
    image: produto5,
    title: 'Produto 5',
    description: 'Descrição do produto 01'
  },
  {
    image: produto6,
    title: 'Produto 6',
    description: 'Descrição do produto 01'
  },
  {
    image: produto7,
    title: 'Produto 7',
    description: 'Descrição do produto 01'
  },
  {
    image: produto8,
    title: 'Produto 8',
    description: 'Descrição do produto 01'
  },
  {
    image: produto9,
    title: 'Produto 8',
    description: 'Descrição do produto 01'
  }
]

const ProductSectionComponent: React.FC = () => {
  return (
    <ProductSection>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </ProductSection>
  )
}

export default ProductSectionComponent
