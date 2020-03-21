import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../comps/Layout';
import { Component } from 'react';

export default class About extends Component {

  // getInitialProps is static so it can be accessed outside of the component as About.getInitialProps
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/deepali2');
    const data = await res.json();
    return { user: data }
  }

  render() {
    const { user } = this.props;

    return (
      <Layout title='About'>
        <p>{user.name}</p>
        <Link href='/'><a>Go Home</a></Link>
        <p>A Javascript Programmer</p>
        <img
          src={user.avatar_url}
          alt='Me'
          height='200px'
        />
      </Layout>
    )
  }
}