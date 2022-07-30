import styles from './index.less';
import Layout from '@/components/layout';
import Header from '@/components/header/index'
import Nav from '@/components/nav/index'

export default function IndexPage(props:any) {
  return (
    <Layout header={<Header />} nav={<Nav />}>
      <div>{props.children}</div>
    </Layout>
  );
}
