import Layout from '../comps/Layout';

export default ({ statusCode }) => (
  <Layout title='Error!!!'>
    {statusCode
      ? `Could not load your user data: StatusCode ${statusCode}`
      : `Couldn't get that page, sorry!!!`
    }
  </Layout>
)