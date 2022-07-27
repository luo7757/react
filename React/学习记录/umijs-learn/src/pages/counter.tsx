import { connect } from "umi";

const Conter = (props: any) => {
  console.log(props)
  return (
    <div>
      <h1>{props.counter}</h1>
      <div>
        <button onClick={props.onIncrease}>+</button>
        <button onClick={props.onDecrease}>-</button>
        <button onClick={props.onAsyncIncrease}>异步加</button>
        <button onClick={props.onAsyncDecrease}>异步减</button>
      </div>
    </div>
  );
};


const mapStateToProps = (state:any) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch:Function) => ({
  onIncrease(){
    dispatch({
      type: "counter/increase"
    })
  },
  onDecrease(){
    dispatch({
      type: "counter/decrease"
    })
  },
  onAsyncIncrease(){
    dispatch({
      type: "counter/asyncIncrease"
    })
  },
  onAsyncDecrease(){
    dispatch({
      type: "counter/asyncDecrease"
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Conter);

