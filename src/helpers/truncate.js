export default function Truncate(props) {
  return (
    <>
      {props.children.slice(0, props.maxValue) +
        `${props.ellipses ? props.ellipses.repeat(3) : '...'}`}
    </>
  )
}
