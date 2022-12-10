import { useState, useEffect } from 'react'
import Product from '../parts/Product'
import CartBtn from '../buttons/CartBtn'
import Header from '../parts/Header'

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
    <div>
      <Header />
      <div className='product-card-wrapper'>
        {product.length > 0 ? renderProducts() : '...Loading'}
      </div>
    </div>
  )
}
