import axios from 'axios';


const appkey = 'demo13_1545210570249';


// export async function getAllStudents(){
//   const data = await axios.get({
//     url: `/api/student/findAll?appkey=${appkey}`,
//   })
//   console.log(data)
// }

export async function getAllStudents(){
  const data = await axios.get({
    url: `/api/student`,
  })
  console.log(data)
}



export async function findStudents({sex = -1, search, page = 1, size = 10 }){
  let data = null;
  if(!search){
    data = await axios({
      url: `/api/student/findByPage?appkey=${appkey}&page=${page}&size=${size}`,
      method: "get"
    }).then(res => res.data).then(res => ({
      count: res.data.cont,
      data: res.data.findByPage
    }))
  }else{
    data = await axios({
      url: `/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${size}&search=${search}&sex=${sex}`,
      method: "get"
    }).then(res => res.data).then(res => ({
      count: res.data.cont,
      data: res.data.searchList
    }))
  }
  return data
}