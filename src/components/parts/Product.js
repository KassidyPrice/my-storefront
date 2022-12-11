import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../App'

import Truncate from '../../helpers/truncate'

export default function Product(props) {
  const { setCart } = useContext(CartContext)

  function addProduct(product) {
    setCart((c) => [...c, product])
  }

  return (
    <>
      <Link exact='true' to={`/single-product-page/${props.id}`}>
        <div className='product-card'>
          <img src={props.image} alt='profile' />
          <h4>
            <Truncate maxValue={60} ellipses=''>
              {props.title}
            </Truncate>
          </h4>
          <p>
            <Truncate maxValue={250} ellipses=''>
              {props.description}
            </Truncate>
          </p>
          <p>${props.price}</p>
        </div>
      </Link>
      <button onClick={() => addProduct(props)}>Add to Cart</button>
    </>
  )
}
