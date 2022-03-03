import React from "react";
import './index.css';
/**
 * 
 * @param {object} props
 * 1. limit 页容量
 * 2. current 当前页码
 * 3. total 总数据量
 * 4. size 显示page范围
 */
export function Page(props){
  // 返回一个 react 元素
  // let pageArr = getMaxAndMinPage(props);
  const Total = Math.ceil(props.total / props.limit);
  const pageList = calculationPageNum(props,Total);
  return (
    <div className="pager">
      <span className={props.current === 1 ? "page disable" : "page"} onClick={
        () => props.changePage(1 ,props)
      }>首页</span>
      <span className={props.current === 1 ? "page disable" : "page"} onClick={
        () => props.changePage(props.current - 1 <= 1 ? 1 : props.current - 1,props)
      }>上一页</span>
      {pageList}
      <span className={props.current === Total ? "page disable" : "page"} onClick={
        () => props.changePage(props.current + 1 >= Total ? Total : props.current + 1,props)
      }>下一页</span>
      <span className={props.current === Total ? "page disable" : "page"}>尾页</span>
      <span className="">{`${props.current}/${Total}`}</span>
    </div>
  )
}

/**
 * 
 * @param {object} props
 * props中total和 limit 计算出总的page数 
 */
function calculationPageNum(props, Total){
  const pageSizeObj = getMaxAndMinPage(props, Total);
  // console.log(pageArr)
  // console.log(props.current,pageSizeObj);
  let pageArr = [];
  for (let i = pageSizeObj.min; i <= pageSizeObj.max; i++) {
    pageArr.push(<span onClick={() => props.changePage(i, props)} key={i} className={props.current === i ? "page active" : "page"}>{i}</span>)
  }
  return pageArr;
}

/**
 * 
 * @param {object} props
 * 根据当前页码计算出 page数组
 */
function getMaxAndMinPage(props,Total){
  // 最小数 加5 
  // 最大数 减5
  let num = Math.floor(props.size / 2);
  let min = props.current -num;
  if(min < 1){
    min = 1;
  }

  let max = min + props.size - 1;
  if(max >= Total){
    max = Total;
  }
  if(max + num >= Total){
    min = max - props.size + 1;
  }

  return {
    min,
    max
  }
}
