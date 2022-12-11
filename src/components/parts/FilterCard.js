import { Link } from 'react-router-dom'

export default function FilterCards(props) {
  return (
    <Link exact='true' to={`/products-page`}>
      <div className='filter-card'>
        <img src={props.src} alt='profile' />
        <h4>{props.category}</h4>
      </div>
    </Link>
  )
}
