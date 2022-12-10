export default function FilterCards(props) {
  return (
    // <Link exact='true' to={`/single-product-page/${props.id}`}>
    <div className='filter-card'>
      <img src={props.src} alt='profile' />
      <h4>{props.category}</h4>
    </div>
    // </Link>
  )
}
