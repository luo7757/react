import { getAllStudents, findStudents } from '@/services/student.js';

export default {
  state: [],
  reducers: {
    setAllStudents(state, { payload }){
      return state = [...payload]
    }
  },
  effects: {
    *asyncGetAllStudents(action, {call, put}){
      const data = yield call(getAllStudents);
      console.log(data);
    }
  }
}

