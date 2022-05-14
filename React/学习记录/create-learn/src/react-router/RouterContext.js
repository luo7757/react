import { createContext } from "react"; 

const ctx = createContext();
ctx.displayName = "Router" // 修改在调式工具中显示的名字

export default ctx;
