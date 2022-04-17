export default function RenderMouseblePanel (props) {
  return (
    <>
      <div className='panel' style={{
        top: props.y,
        left: props.x
      }}>
      </div>
    </>
  )
}
