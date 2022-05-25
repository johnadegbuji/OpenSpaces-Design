import React from 'react';
import styled from 'styled-components'
import Slideshow from './SlideShow';
import SliderSection from './SliderSection';

const SectionWrapper = styled.div`
  height: 95vh;
  width: 100%;
  display: block;
  max-width: 1440px;
  margin: auto;
  padding-top: 8em;
  overflow: visible;

  @media only screen and (max-width: 768px) {
  padding-top: 40em;
  height: 100vh;
  }
`

const CaseStudySection = () => {
    return(
    <a id="caseStudy">
      <SectionWrapper>
          <SliderSection></SliderSection>
      </SectionWrapper>
    </a>
    )
}

export default CaseStudySection;