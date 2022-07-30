import styles from './index.less';

export default function Layout(props: any){
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {props.header}
      </header>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          {props.nav}
        </nav>
        <main className={styles.mian}>
          {props.children}
        </main>
      </div>
    </div>
  );
};
