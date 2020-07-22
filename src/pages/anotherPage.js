import React from 'react'
import { Link } from 'gatsby'
//import Masks from '/src/images/mask_homepage.jpg'
//import Layout from '/src/components/layouts'


import SEO from '~/components/seo'

const AnotherPage = () => (
  <>
    <SEO title="Another Page" />
    <h1>Another Page</h1>
    <p>Welcome to another page </p>
    <Link to="/file:///Users/celinewang/Documents/github/gatsby-shopify-starter/src/pages/homepage.html/">Go back to the homepage</Link>
  </>


)

export default AnotherPage