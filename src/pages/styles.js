import styled from '@emotion/styled'

import { breakpoints } from '../utils/styles'

export const Featured = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  
    @media (max-width: ${breakpoints.s}px){
      grid-template-columns: repeat(1, 1fr);
    }
`
export const Background = styled.div`
    background-image: url(mask_homepage.jpg);
    background-position: center top;
    background-repeat: no-repeat;
`
export const Hero = styled.div`
    font-weight: 700;
    font-size: 2.0rem;
    text-align: center;
  
`
export const Title = styled.span`
  font-weight: 300;
  font-size: 1.5rem;
  text-align: center;
`
export const OurMasks = styled.div`

`
