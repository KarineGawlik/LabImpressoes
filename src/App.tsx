import Carrousel from './Components/Carrousel'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Menu from './Components/Menu'
import ProductSectionComponent from './Components/ProductSection'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Menu />
      <Header />
      <Carrousel />
      <div>
        <ProductSectionComponent />
      </div>
      <Footer />
    </>
  )
}

export default App
