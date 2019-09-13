import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Content from '../components/content'
import { H1 } from '@dfds-ui/react-components'

const Example = () => (
    <Layout>
    <Head>
      <title>Example page</title>
    </Head>
    <Content>
      <H1>Example page</H1>
      <p>An example of a page created and linked to within the next.js framework</p>
    </Content>
  </Layout>
)

export default Example
