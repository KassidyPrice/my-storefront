import { useState, useEffect, useContext } from 'react'

import { CartContext } from '../../App'
import Footer from '../parts/Fotter'
import Header from '../parts/Header'

export default function SingleProductPage(props) {
  const [product, setProduct] = useState({})
  const [count, setCount] = useState()
  const { setCart } = useContext(CartContext)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        setProduct(data)
        setCount(data.rating.count)
      })
      .catch((err) => {
        console.error('Character fetch error: ', err)
      })
  }, [])

  function addProduct(product) {
    setCart((c) => [...c, product])
    setCount((prevState) => (prevState > 1 ? prevState - 1 : null))
  }

  return (
    <div key={product.id}>
      <Header />
      <div className='single-product-body'>
        <h1>{product.title}</h1>
        <img src={product.image} />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>{count === null ? 'OUT OF STOCK' : `${count} left in store`}</p>
        <button onClick={() => addProduct(product)}>Add to Cart</button>
      </div>
      <Footer />
    </div>
  )
}
