import { Link } from 'react-router-dom'
import Truncate from '../helpers/truncate'

export default function Product(props) {
  return (
    // <Link exact='true' to='/dashboard'>
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
    </div>
    // </Link>
  )
}
