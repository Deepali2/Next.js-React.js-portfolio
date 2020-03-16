import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
  <Layout title='About'>
    <Link href='/'><a>Go Home</a></Link>
    <p>A Javascript Programmer</p>
    <img
      src='/Javascript_badge.png'
      alt='javascript logo'
      height='200px'
    />
  </Layout>
)

export default About;