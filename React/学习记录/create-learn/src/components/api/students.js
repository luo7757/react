const appkey = 'luoshiyan_1622205899022';

export function getAllStudents(page = 1, limit = 10){
  return fetch(`/api/student/findAll?appkey=${appkey}&page=${page}&size=${limit}`)
  .then(async (res) => await res.json()).then(res => res.data)
}