import { useState, useEffect } from 'react'

import CartBtn from './CartBtn'

export default function SingleProductPage(props) {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        setProduct(data)
      })
      .catch((err) => {
        console.error('Character fetch error: ', err)
      })
  }, [])

  return (
    <div>
      <h1>Product Data</h1>
      <h3>Name: {product.title}</h3>
      <img src={product.image} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* <p>
        {product.rating.count ? `${product.rating.count} left in store` : ''}
      </p> */}
      <CartBtn />
    </div>
  )
}
