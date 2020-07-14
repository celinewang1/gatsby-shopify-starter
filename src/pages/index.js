import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '~/components/seo'
//import ProductGrid from '~/components/ProductGrid'
   //button not working


const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <center><h1>Masks For All</h1></center>
    <p>Protect Your Family, Protect Yourself, Protect Others.</p>
    
    <br></br>
    <br></br>
    <br></br>
    

    <html>
    <body>
    <center><Link to="/face-masks/">
      <button type="submit" onclick="location.href='file:///Users/celinewang/Documents/github/gatsby-shopify-starter/src/pages/homepage.html'">
        View Masks</button></Link></center>

    </body>
    </html>

    <br></br>
    <br></br>
    <br></br>

    <Link to="/face-masks/">Face Masks</Link>
    <br></br>
    <Link to="/about-us/">About Us</Link>
    <br></br>
    <Link to="/FAQ/">FAQ</Link>
    <br></br>
    <Link to="/wear-mask/">How To Wear A Mask</Link>
    <br></br>
    <Link to="/index2/">Another Page</Link>
    
    

    <br></br>
    <br></br>
    <br></br>
  </>
)

export default IndexPage
