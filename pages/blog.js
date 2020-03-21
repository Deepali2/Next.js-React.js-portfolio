import Layout from '../comps/Layout';
import Link from 'next/link'

const PostLink = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

const Blog = () => (
  <Layout title='MyBlog'>
    <ul>
      <PostLink title='react' />
      <PostLink title='angular' />
      <PostLink title='vue' />
    </ul>

  </Layout>
)

export default Blog;