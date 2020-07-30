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
  LargeButton,
  ViewMasksHover,
  HeroImage3Buttons,
  HeroImageButton,
  HeroImageText,
  ImageButtonsGridContainer,
  ImageButtonsGridItem,
  SecondGridContainer,
  SecondGridItem1,
  SecondGridItem2,
  SecondGridItem3,
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
      <Title>Masks For All</Title>
      <Link to="/face-masks/">
      <center><LargeButton>BUY MASKS</LargeButton></center>
      </Link>

      <ImageButtonsGridContainer>
        <ImageButtonsGridItem>Protect Your Family</ImageButtonsGridItem>
        <ImageButtonsGridItem>Protect Yourself</ImageButtonsGridItem>
        <ImageButtonsGridItem>Protect Others</ImageButtonsGridItem>
      </ImageButtonsGridContainer>

      <SecondGridContainer>
        <SecondGridItem3>hello</SecondGridItem3>
        <SecondGridItem1>Our Masks</SecondGridItem1>
        <SecondGridItem2>We supply Level 2 medical face masks worn by doctors, nurses, and medical professionals.  These masks are now available to the general public.  
        <br></br>
        - ASTM Level 2 Rated Medical Face Masks
        <br></br>
        - Bacteria Filtration Efficiency Greater Than 99%
        <br></br>
        - Particulate Filtration Efficiency Greater Than 99%
        <br></br>
        - 3-Ply / 3 Layer Design:  Liquid Resistance Layer, Flame & Filtration Layer, and soft Inner Layer for comfort.
        <br></br>
        - One Size Fits Most:  These masks were not designed to fully seal against the face.  As long as the masks cover from the bridge of the nose to the bottom of the chin, they will provide excellent protection.</SecondGridItem2>
      </SecondGridContainer>
      {/* <HeroImage3Buttons>
      <HeroImageButton type="button"><HeroImageText>Protect Your Family</HeroImageText></HeroImageButton>
      <HeroImageButton type="button"><HeroImageText>Protect Yourself</HeroImageText></HeroImageButton>
      <HeroImageButton type="button"><HeroImageText>Protect Others</HeroImageText></HeroImageButton>
      </HeroImage3Buttons> */}
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
