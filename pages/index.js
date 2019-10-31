import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { H1, Toast, Button } from '@dfds-ui/react-components'
import { Modal } from '@dfds-ui/modal'
import Content from '../components/content'
import List from '../components/list'

const Home = () => {
  const [showToast, setShowToast] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Content>
        <H1>Home</H1>
        {showToast && <Toast onRequestClose={() => setShowToast(false)}>TOAST - close Button should NOT be blue</Toast>}
        <Button onClick={() => setShowModal(!showModal)}>Click to open modal</Button>
        <Modal
          isOpen={showModal}
          onRequestClose={() => {
            setShowModal(false)
            setShowToast(true)
          }}
        >
          This is the modal content
        </Modal>
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
