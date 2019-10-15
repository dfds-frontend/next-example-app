import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { H1, Toast } from '@dfds-ui/react-components'
import Content from '../components/content'
import List from '../components/list'

const Home = () => {
  const [showToast, setShowToast] = React.useState(true)

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Content>
        <H1>Home</H1>
        {showToast && <Toast onRequestClose={() => setShowToast(false)}>TOAST - close Button should NOT be blue</Toast>}
        <p>This is an example app using the following technologies</p>
        <List>
          <li>
            <a href="https://nextjs.org/">next.js</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/@dfds-ui/react-components">@dfds-ui/react-components</a>
          </li>
          <li>
            <a href="https://emotion.sh/">emotion</a>
          </li>
        </List>
      </Content>
    </Layout>
  )
}

export default Home
