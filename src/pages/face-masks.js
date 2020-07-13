import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const SecondPage = () => (
  <>
    <SEO title="Face Masks" />
    <h1>Face Masks</h1>
    <p></p>
    <ProductGrid />

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
