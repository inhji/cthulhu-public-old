import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/fontawesome-free-solid'

import Header from '../components/Header'
import Nav from '../components/Nav'

import './index.css'
import './custom.css'
import './nav.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Technos & Psyche"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    >
      <link rel="me" href="https://github.com/inhji" />
    </Helmet>
    <Header />

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      <Nav />
      <main>{children()}</main>
      <footer style={{ marginTop: 10, borderTop: '1px solid #eee', paddingTop: 10 }}>
        Created in 2018 by Inhji with Blood, Sweat and Gatsby.js{' '}
        <FontAwesomeIcon icon={faHeartbeat} />
      </footer>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
