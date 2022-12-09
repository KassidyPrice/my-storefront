import { useState, useEffect } from 'react'
import Product from './Product'
import CartBtn from './CartBtn'

export default function ProductPage() {
  const [product, setProduct] = useState([])

  function renderProducts() {
    return product.map((item) => {
      return (
        <div className='card-btn-container'>
          <Product key={item.id} {...item} />
          <CartBtn />
        </div>
      )
    })
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
      })
      .catch((err) => {
        console.error('Get products error: ', err)
      })
  }, [])

  return (
    <div className='product-card-wrapper'>
      {product.length > 0 ? renderProducts() : '...Loading'}
    </div>
  )
}
