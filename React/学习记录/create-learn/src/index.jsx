import React from "react";
import ReactDOM from 'react-dom';
import { Students } from "./Students";

const appkey = "luoshiyan_1622205899022";
const url = "https://open.duyiedu.com/api/student/findAll";

async function fetchAllStudents(){
  const result = await fetch(`${url}?appkey=${appkey}`).then((res) => res.json())
  .then(res => res.data);
  return result;
}
async function renderStudents(){
  const list = await fetchAllStudents();
  console.log(list)
  ReactDOM.render(<Students list={list}/>, document.getElementById("root"))
}
renderStudents();