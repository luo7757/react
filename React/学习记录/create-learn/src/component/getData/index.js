const appkey = "luoshiyan_1622205899022"
export async function getStudents(){
  return await fetch(`http://open.duyiedu.com/api/student/findAll?appkey=${appkey}`).then(res => res.json()).then(res => res.data);
}