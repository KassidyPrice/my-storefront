import { useState, useEffect, useMemo } from 'react'
import Product from '../parts/Product'
import Header from '../parts/Header'
import Footer from '../parts/Fotter'

export default function ProductPage() {
  const [product, setProduct] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()
  let filteredList = useMemo(getFilteredList, [selectedCategory, product])

  // const toggleFilter = (cat) => setCategory((c) => (cat === c ? null : cat))

  function handleCategoryChange(event) {
    setSelectedCategory(
      event.target.value === selectedCategory ? null : event.target.value
      // : [...prevState, event.target.value]
    )
  }

  function getFilteredList() {
    if (!selectedCategory) {
      return product
    }
    return product.filter((item) => item.category === selectedCategory)
  }

  function renderProducts() {
    return filteredList.map((item) => {
      return (
        <div className='card-btn-container'>
          <Product key={item.id} {...item} />
        </div>
      )
    })
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProduct(data)
      })
      .catch((err) => {
        console.error('Get products error: ', err)
      })
  }, [])

  return (
    <div>
      <Header />

      <div className='product-page-body'>
        <div className='filter-container'>
          <div>
            <input
              type='checkbox'
              id='women'
              value="women's clothing"
              onChange={handleCategoryChange}
            />
            <label htmlFor='women'> Women's Clothing</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='men'
              value="men's clothing"
              onChange={handleCategoryChange}
            />
            <label htmlFor='men'> Men's Clothing</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='Electonics'
              value='electronics'
              onChange={handleCategoryChange}
            />
            <label htmlFor='Electonics'> Electonics</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='jewelry'
              value='jewelery'
              onChange={handleCategoryChange}
            />
            <label htmlFor='jewelry'> Jewelry</label>
          </div>
        </div>
        <div className='product-card-wrapper'>
          {product.length > 0 ? renderProducts() : '...Loading'}
        </div>
      </div>
      <Footer />
    </div>
  )
}
