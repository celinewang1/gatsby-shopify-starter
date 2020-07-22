import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'

const FAQPage = () => (
  <>
    <SEO title="FAQ" />
    <br />
    <h1>FAQ</h1>
    <br />
    <p>
      Below is a list of questions customers frequently ask us about masks.  Make sure to check back often, as we continue to add Questions & Answers.
    </p>
    <p>
      QUESTION: What makes a mask medical grade?
    </p>
    <p>
      The mask must obtain FDA certiﬁcation and pass strict tests to meet minimum protection standards for those wearing it.
    </p>
    <p>
      QUESTION: What does ASTM Level 2 mean?
    </p>
    <p>
      Masks must pass ASTM (American Society for Testing and Materials) testing and obtain proper certiﬁcations to qualify as medical grade. All of these tests are conducted by 3rd party independent labs.
    </p>
    <p>
      Level 1: 95%+ bacterial & particulate ﬁltration
      Level 2: 98%+ bacterial & particulate ﬁltration
      Although we carry Level 2 masks, we did not just stop there.  By combining the best ﬁltration materials with the best manufacturing techniques, we have reached 99% bacterial and particulate ﬁltration while keeping breathability at a comfortable level.
    </p>
    <p>
      QUESTION:  How do these masks compare to N95s?
    </p>
    <p>
      The “95” in N95 means there is 95%+ bacterial and particulate ﬁltration. They are most effective if they are sealed tightly against your face; no air should pass through the top, bottom, or sides. The majority of people do not need this type of mask, and most people who wear an N95 do not wear it properly sealed against their face.
    </p>
    <p>
      Medical professionals who use it for work undergo routine "ﬁt tests" to ensure it seals properly. If the mask is not sealed against their face, the ﬁltration capabilities of the N95 performs like an ASTM Level 1 mask. 
    </p>
    <p>
      HELPFUL TIPS:  
    </p>
    <p>
      Tip #1: Handle the mask by the ear loops.  This will prevent you from touching the outside of the mask which could be contaminated from your environment and the clean inside layer which has direct contact with your face.
    </p>
    <p>
      Tip #2: Unloop one side for temporary removal. If you are wearing your mask and need to take it off to drink some water or use your phone’s Face ID, unloop one ear and leave the mask hanging on the other.  You do not need to take it off completely.
    </p>
    <p>
      Tip #3: Dispose daily or when dirty. These are disposable masks, so you should not wear the same one every day.  With normal use, each mask can be used up to 8 hours.  If the mask becomes dirty, for example coughing/sneezing into it or from being dropped on the ground, we would recommend replacing it with a new mask.

    </p>
<br />
<br /> 
<br />
    {/* <Link to="/">Go back to the homepage</Link> */}
  </>
)

export default FAQPage