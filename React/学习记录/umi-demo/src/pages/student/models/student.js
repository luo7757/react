import * as api from '@/services/student.js';

export default {
  state:[],
  reducers:{
    setStudent(state, {payload}){
      return state = payload;
    }
  },
  effects: {
    *asyncGetAllStudent(action, { call, put }){
      const data = yield call(api.getAllStudents)
      console.log(data)
    }
  }
}