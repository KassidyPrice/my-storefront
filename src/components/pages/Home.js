import Header from '../parts/Header'
import Banner from '../../assets/banner.jpg'
import FilterCards from '../parts/FilterCard'
import Footer from '../parts/Fotter'

export default function Home() {
  return (
    <div className='homeBody'>
      <Header />
      <div className='banner'>
        <img src={Banner} alt='' />
      </div>
      <div className='cards-container'>
        <FilterCards
          src='https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg'
          category="Women's Clothing"
        />
        <FilterCards
          src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
          category="Men's Clothing"
        />
        <FilterCards
          src='https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'
          category='Electronics'
        />
        <FilterCards
          src='https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg'
          category='Jewelery'
        />
        <Footer />
      </div>
    </div>
  )
}
