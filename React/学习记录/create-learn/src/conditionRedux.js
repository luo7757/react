import {conditionAction, studentAction} from './DEMO/action'
import SearchBar from './components/Students/search'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    condition: {
      sex: state.condition.sex,
      search: state.condition.search
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onSearch(newCondition) {
      newCondition.page = 1;// 新的条件 重置当前页
      dispatch(conditionAction.createChangeConditionAction(newCondition))// 修改条件
      // 添加一个异步action任务，当saga完成异步后，重新触发一次dispatch，进行数据处理
      dispatch(studentAction.createAsyncGetStudentsDateAction())//异步，saga中添加异步action监控
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
