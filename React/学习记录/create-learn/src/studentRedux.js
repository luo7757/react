import { studentAction } from "./DEMO/action";
import { connect } from 'react-redux'
import StudentsList from './components/Students/StudentsList'

function mapStateToProps(state){
  return {
    data:state.student.student || [],
  }
}


export default connect(mapStateToProps)(StudentsList)