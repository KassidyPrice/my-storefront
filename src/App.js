import ProductPage from './components/ProductsPage'
import './styles/app.css'
import SingleProductPage from './components/SingleProductPage'

export default function App() {
  return <div className='app'>{<SingleProductPage />}</div>
}
