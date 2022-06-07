import { conditionAction } from "./DEMO/action";
import { connect } from 'react-redux'
import Pager from "./components/common/Pager";
import { studentAction } from './DEMO/action/index'

function mapDispatchToProps(dispatch){
  return {
    onPageChange(page) {
      // 修改当前条件
      dispatch(conditionAction.createChangeConditionAction({
        page
      }))
      dispatch(studentAction.createAsyncGetStudentsDateAction())
    }
  }
}

function mapStateToProps(state){
  return {
    limit: state.condition.limit,
    current: state.condition.page,
    panelNumber: 5,
    total: state.student.count
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pager)