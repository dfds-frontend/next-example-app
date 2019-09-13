import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { H1 } from '@dfds-ui/react-components'
import Content from '../components/content'
import List from '../components/list'

const Home = () => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>
    <Content>
      <H1>Home</H1>
      <p>This is an example app using the following technologies</p>
      <List>
        <li><a href="https://nextjs.org/">next.js</a></li>
        <li><a href="https://www.npmjs.com/package/@dfds-ui/react-components">@dfds-ui/react-components</a></li>
        <li><a href="https://emotion.sh/">emotion</a></li>
      </List>
    </Content>
  </Layout>
)

export default Home
