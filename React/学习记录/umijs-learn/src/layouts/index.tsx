import { NavLink } from "umi";
import styles from '@/assets/css/link.css';
import globalStyles from '@/global.css';

export default function Layout(props:any) {
  console.log(styles)
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName={styles.active} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/docs">Docs</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/test">Test</NavLink>
          </li>
          <li>
            <NavLink activeClassName={globalStyles.active} to="/counter">Counter</NavLink>
          </li>
        </ul>
      </nav>
      <header>
        {props.children}
      </header>
      <footer>页脚</footer>
    </div>
  );
}
