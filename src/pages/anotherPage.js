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
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default AnotherPage

/*
export default () => {
    console.log(Masks)
    return (
      <Layout>
        <h1>pic import</h1>
        <img src={Masks} alt="Masks laid out" />

      </Layout>
    )
  } */