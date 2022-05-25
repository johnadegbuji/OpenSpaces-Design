import React from 'react'
import styled from 'styled-components'

const AboutCardWrapper = styled.div`
  background: linear-gradient(180deg, #222222 -73.91%, #0c0c0c 85.67%);
  width: 17em;
  height: 17em;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  padding: 1em;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    width: 11em;
    height: 15em;
    margin-left: auto;
    margin-right: auto;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
`
const AboutCardImage = styled.img`
  object-fit: contain;
  width: 5em;
`
const AboutCardTitle = styled.h2`
  margin: 0.5em 0;
  @media only screen and (max-width: 768px) {
  text-align: center;
  }
`
const AboutCardBar = styled.div`
  width: 50%;
  height: 0.3em;
  background-color: ${(props) => props.barColor};
  border-radius: 0.3em;
`

const AboutCardInfo = styled.p`
  color:#dfdfdf;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
`

const AboutCard = (props) => {
  return (
    <AboutCardWrapper>
      <AboutCardImage src={props.cardImage} />
      <AboutCardTitle>{props.cardTitle}</AboutCardTitle>
      <AboutCardBar barColor={props.barColor} />
      <AboutCardInfo>
        {props.cardInfo}
      </AboutCardInfo>
    </AboutCardWrapper>
  )
}

export default AboutCard
