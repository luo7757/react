import Counter from "./components/Conuter/index";
import { BrowserRouter, Switch, Route, Link } from "dva/router";
function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Conuter</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/counter" exact component={Counter}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
// 在使用dva的时候 这个情况下

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default App;
