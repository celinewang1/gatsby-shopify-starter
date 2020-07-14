import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'

const FAQPage = () => (
  <>
    <SEO title="FAQ" />
    <h1>FAQ</h1>
    <p>Frequently Asked Questions</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default FAQPage