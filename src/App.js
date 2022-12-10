import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import { useEffect, useState, useContext, createContext } from 'react'

import './styles/main.scss'
import Home from './components/pages/Home'
import ProductPage from './components/pages/ProductsPage'
import SingleProductPage from './components/pages/SingleProductPage'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Cart from './components/pages/Cart'

export const CartContext = createContext()

export default function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    console.log('CART: ', cart)
  })

  const cartState = {
    cart,
    setCart,
  }

  return (
    <div className='app'>
      <BrowserRouter>
        <CartContext.Provider value={cartState}>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/products-page' component={ProductPage} />
            <Route
              path='/single-product-page/:id'
              component={SingleProductPage}
            />
            <Route path='/contact' component={Contact} />
            <Route path='/About' component={About} />
            <Route path='/cart' component={Cart} />
            <Redirect exact from='/' to='/home' />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  )
}
