import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
        <br/><br/>
          <h1>Thank you!</h1>
          <p>Thank your for contacting us.</p>
          <br/>
          Return to the <Link to="/">Home Page</Link>
        </div>
      </div>
    </section>
  </Layout>
)
