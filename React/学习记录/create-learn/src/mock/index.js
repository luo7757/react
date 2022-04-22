import Mock from 'mockjs';

Mock.mock('/api/student/findAll', 'get', {
  code: 0,
  msg: "",
  data: {
    "name|10-20": "@cname"
  }
})

export default Mock;