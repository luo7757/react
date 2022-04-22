const appkey = 'luoshiyan_1622205899022';

export async function getAllStudents(){
  return await fetch(`/api/student/findAll`)
  .then(res => res.json()).then(res => res.data)
}