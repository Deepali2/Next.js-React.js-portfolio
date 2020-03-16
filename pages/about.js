import Link from 'next/link';

const About = () => (
  <div>
    <h1>About</h1>
    <Link href='/'><a>Go Home</a></Link>
    <p>A Javascript Programmer</p>
    <img
      src='/Javascript_badge.png'
      alt='javascript logo'
      height='200px'
    />
  </div>
)

export default About;