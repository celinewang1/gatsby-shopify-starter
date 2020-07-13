import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'

const SecondPage = () => (
  <>
    <SEO title="How To Wear A Mask" />
    <h1>How To Wear A Mask</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage