import { useContext } from 'react'
import { CartContext } from '../../App'
import Truncate from '../../helpers/truncate'

export default function Cart() {
  const { cart, setCart } = useContext(CartContext)

  function removeProduct(id) {
    const newCart = cart.filter((item) => item.id !== id)

    setCart(newCart)
  }

  function renderCart() {
    return cart.map((item) => {
      return (
        <div key={item.id} className='cart-product-card'>
          <img src={item.image} alt='profile' />
          <h4>
            <Truncate maxValue={20} ellipses=''>
              {item.title}
            </Truncate>
          </h4>
          <p>
            <Truncate maxValue={200} ellipses=''>
              {item.description}
            </Truncate>
          </p>
          <p>${item.price}</p>
          <button onClick={() => removeProduct(item.id)}>
            Remove From Cart
          </button>
        </div>
      )
    })
  }

  return <div>{cart.length > 0 ? renderCart() : '...Loading'}</div>
}
