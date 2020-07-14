import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'

const AboutUsPage = () => (
  <>
    <SEO title="About Us" />
    <h1>About Us</h1>
    <p>About MaskBestBuy</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default AboutUsPage
