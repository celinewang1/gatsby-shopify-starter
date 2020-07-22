import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
//import { Img } from '~/utils/styles'
import SEO from '~/components/seo'
//import ProductGrid from '~/components/ProductGrid'
import {
  Featured,
  Background,
  Hero,
  OurMasks,
  ViewMasksButton,
  ViewMasksHover,
  ViewMasksText,
  ProtectFamily,
  ProtectSelf,
  ProtectOthers,
  ProtectFamilyText,
  ProtectSelfText,
  ProtectOthersText,
  Title,
  Links
} from './styles'


export const query = graphql`
  query {
    desktopImage: file(
      relativePath: { eq: "src/pages/mask_homepage.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


const IndexPage = () => {

  return (
    <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />


    <Hero>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Title>Masks for All</Title>
      <br></br>
      <br></br>
      <Link to="/face-masks/">
      <center><ViewMasksButton class="view-masks-button" onmouseover="ViewMasksHover" type="submit">
      <ViewMasksText>VIEW MASKS</ViewMasksText>
      </ViewMasksButton></center>
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <ProtectFamily type="button"><ProtectFamilyText>Protect Your Family</ProtectFamilyText></ProtectFamily>
      <ProtectSelf type="button"><ProtectSelfText>Protect Yourself</ProtectSelfText></ProtectSelf>
      <ProtectOthers type="button"><ProtectOthersText>Protect Others</ProtectOthersText></ProtectOthers>


    </Hero>

{/* 
    <Hero>
    <Title> Masks For All </Title>
    <p>Protect Your Family, Protect Yourself, Protect Others.</p>
    
    <br></br>
    <br></br>
    <br></br>
    
    <body>
    <center><Link to="/face-masks/">
      <button type="submit" onclick="location.href='file:///Users/celinewang/Documents/github/gatsby-shopify-starter/src/pages/homepage.html'">
      View Masks</button></Link></center>
    </body>
    </Hero>
    <br></br> */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
    <Links>
      <Link to="/face-masks/">Face Masks</Link>
      <br></br>
      <Link to="/about-us/">About Us</Link>
      <br></br>
      <Link to="/FAQ/">FAQ</Link>
      <br></br>
      <Link to="/wear-mask/">How To Wear A Mask</Link>
      <br></br>
      <Link to="/anotherPage/">Another Page</Link>
      <br></br>
      <Link to="/counter/">Counter</Link>
    </Links>
  </>
  )
}


export default IndexPage
