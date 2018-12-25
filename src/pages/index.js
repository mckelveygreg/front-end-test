import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm'
import Careers from '../components/careers'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Careers"
      keywords={[
        'gatsby',
        'application',
        'react',
        'trifoia',
        'front-end',
        'web dev',
        'test',
      ]}
    />
    <Careers />
    <ContactForm />
  </Layout>
)

export default IndexPage
