import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'

const WearMaskPage = () => (
  <>
    <SEO title="How To Wear A Mask" />
    <h1>How To Wear A Mask</h1>
    <p>Steps to Wear a Mask</p>
    <br />
    <br />
    {/* <Link to="/">Go back to the homepage</Link> */}
    <br />
    <br />
  </>
)

var steps = document.createElement("img");
steps.src = "wear_mask.jpg";
document.body.appendChild(steps);

export default WearMaskPage => <div> <img src='wear_mask.jpg'/> </div>
