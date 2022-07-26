export default (props:any) => {
  // 这里就可以在渲染前进行一些处理 比如不适用umi提供的title处理，自己进行处理
  // 简单处理一下 深度检测/name is none 等情况未处理
  document.title = props.children.props.route.meta.name
  return props.children;
  // return <div>我草</div>
}