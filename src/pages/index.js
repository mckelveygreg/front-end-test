import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm'
import Careers from '../components/careers'

const IndexPage = () => (

        <Layout>
          <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
          <Careers />
          <ContactForm />
        </Layout>

)

export default IndexPage
