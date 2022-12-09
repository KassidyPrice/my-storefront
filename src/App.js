import { Switch, BrowserRouter, Route } from 'react-router-dom'

import './styles/app.css'
import ProductPage from './components/ProductsPage'
import SingleProductPage from './components/SingleProductPage'

export default function App() {
  return (
    <div className='app'>
      {/* <Switch> */}
      <BrowserRouter>
        <Route path='/products-page' component={ProductPage} />
        <Route path='/single-product-page/:id' component={SingleProductPage} />
      </BrowserRouter>
      {/* </Switch> */}
    </div>
  )
}
