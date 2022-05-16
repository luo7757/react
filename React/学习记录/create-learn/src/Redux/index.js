import { createStore, bindActionCreators } from 'redux';
import * as NumberActions from '../Redux/action/number-createAction';
import ActionType from '../Redux/action/action-type';


const reducer = (state, action, payload) => {
  if(action.type === ActionType.INCREASE){
    return state + 1;
  }else if(action.type === ActionType.DECREASE){
    return state - 1;
  }else if(action.type === ActionType.SET){
    return state = action.payload
  }
  return state;
}
// createStore方法 两个参数 1、reduce 数据改变方法 2、数据初始值
const state = createStore(reducer, 10);

// subscribe 方法 在通过reduce改变数据后，就会触发。
state.subscribe(() => console.log(state.getState()))


//  dispatch（action ）  是数据的唯一改变方法
state.dispatch({type: ActionType.INCREASE})
state.dispatch({type: ActionType.INCREASE})
state.dispatch({type: ActionType.INCREASE})
state.dispatch({type: ActionType.DECREASE})


// 使用类型拆创建函数和 action创建函数
state.dispatch(NumberActions.decreaseNumberAction())
state.dispatch(NumberActions.increaseNumberAction())
state.dispatch(NumberActions.setNumberAction(150))

// 使用bindActionCreators 创建
// 第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch函数
// 得到一个新的对象，新对象中的属性名与第一个参数的属性名一致

const boundActions = bindActionCreators(NumberActions, state.dispatch); // 就是简单的合并操作
// NumberActions内部的方法，直接调用即可自动分发

// 得到一个 action 改变函数，并直接分发
boundActions.decreaseNumberAction();

