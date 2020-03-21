import Layout from '../comps/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>lorem jdsiofjdsifjkdsfjdsfjdsfjkdsjf fdsjkfhdsk vdsiofchjdsio ewioruewio
    </p>
  </Layout>
)

export default withRouter(Post);