import Link from 'next/link';
import Layout from '../comps/Layout';
import fetch from 'isomorphic-unfetch';

import Error from './_error';
import { Component } from 'react';

export default class About extends Component {

  // getInitialProps is static so it can be accessed outside of the component as About.getInitialProps
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/deepali2');
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    return { user: data, statusCode }
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />
    }

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