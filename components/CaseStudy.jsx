import React from 'react'
import styled from 'styled-components'
import SliderSection from './SliderSection'




//TODO: Move/integrate component into the Slider Section 


const CaseStudyWrapper = styled.div`
    padding: 1em 0em 3em 5em;
    background-color: #0C0C0C;
    border-radius: 1em;
    max-width: 1440px;
    width: 70%;
    height: fit-content;
    margin: 3em auto 4em auto;
    overflow-x: hidden;

    h1:first-child{
        letter-spacing: .2em;
    }
`




const CaseStudy = () => {
  return (
    <CaseStudyWrapper>
        <SliderSection/>
    </CaseStudyWrapper>
  )
}

export default CaseStudy