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
    position: relative;
    top: 100%;
    width: 100%;
    height: 100%;
    padding: 0;

  
`
export const Title = styled.div`
    font-weight: 550;
    font-size: 4.0rem;
    text-align: center;
    font-family: Georgia;
    font-stretch: condensed;


`
export const ViewMasksButton = styled.div`
    background-color: #33adff;
    //border: 2px solid #d1d1e0;
    width: 15%;
    padding: 10px;
    text-align: center;
    transition: transform .2s;
`
export const ViewMaskHover = styled.div`
    transform: scale(1.5); 
`

export const ViewMasksText = styled.span`
    color: white;
    font-size: 13px;
    font-style: normal;
    font-weight: 200;
    text-align: center;
    font-family: Arial;
    letter-spacing: 2px;
    text-decoration: none;


`
export const ProtectFamily = styled.div`
    background-color: white;
    border: 2px solid #d1d1e0;
    width: 15%;
    padding: 10px;
    text-align: left;
    transition: transform .2s;

`
export const ProtectFamilyText = styled.div`
    background-color: white;
    //width: 15%;
    padding: 10px;
    font-size: 13px;
    font-style: normal;
    font-weight: 200;
    text-align: center;
    font-family: Arial;
    letter-spacing: 2px;

`
export const ProtectSelf = styled.div`
    background-color: white;
    border: 2px solid #d1d1e0;
    width: 15%;
    padding: 10px;
    text-align: center;
    margin: auto;
    margin-bottom: 80px;
`
export const ProtectSelfText = styled.div`
    background-color: white;
    //width: 50%;
    padding: 10px;
    font-size: 13px;
    font-style: normal;
    font-weight: 200;
    text-align: center;
    font-family: Arial;
    letter-spacing: 2px;
`
export const ProtectOthers = styled.div`
    background-color: white;
    border: 2px solid #d1d1e0;
    width: 15%;
    padding: 10px;
    text-align: right;
    float: right;
`

export const ProtectOthersText = styled.div`
    background-color: white;
    //width: 15%;
    padding: 10px;
    font-size: 13px;
    font-style: normal;
    font-weight: 200;
    text-align: center;
    font-family: Arial;
    letter-spacing: 2px;
`


export const Links = styled.div`
    text align: bottom;
`

