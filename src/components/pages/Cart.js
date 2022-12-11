import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../App'
import Truncate from '../../helpers/truncate'
import Header from '../parts/Header'
import Footer from '../parts/Fotter'

export default function Cart() {
  const { cart, setCart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  function removeProduct(id) {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }

  function getTotal() {
    let total = 0
    cart.forEach((item) => {
      total = total + item.price
    })
    return total
  }

  function renderCart() {
    return cart.map((item) => {
      return (
        <div key={item.id} className='cart-product-card'>
          <Link exact='true' to={`/single-product-page/${item.id}`}>
            <div className='link-container'>
              <img src={item.image} alt='profile' />
              <h4>
                <Truncate maxValue={20} ellipses=''>
                  {item.title}
                </Truncate>
              </h4>
              <p>${item.price}</p>
            </div>
          </Link>
          <button onClick={() => removeProduct(item.id)}>
            Remove From Cart
          </button>
        </div>
      )
    })
  }

  return (
    <div className='cart-page-body'>
      <Header />
      <div className='cart-card-container'>
        {cart.length > 0 ? renderCart() : 'Your cart is empty.'}
      </div>
      {cart.length > 0 ? (
        <div className='checkout-container'>
          <h2>Total: ${getTotal()}</h2>
          <button
            onClick={() =>
              alert('Thank you for shopping at Old Mill Mercentile.')
            }
          >
            Checkout
          </button>
        </div>
      ) : null}

      <Footer />
    </div>
  )
}
