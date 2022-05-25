import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const SectionWrapper = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  position: relative;
  max-width: 1440px;
  margin: auto;
  padding-top: 8em;
  overflow: visible;
  margin-top: 10%;

  @media only screen and (max-width: 768px) {
    height: 100vh;
    padding-top: 15em;
    margin-bottom: 20em;
    display: block;

  }

`


const ProcessSubText = styled.div`
  position: absolute;
  top: 0;
  left: 65px;
  p{
    color:#ffffffd9;
    line-height: 2em;
    width: 70%;
    font-family: 'Roboto';
    font-weight: 500;
  }
  span {
      color: pink;
  }
  @media only screen and (max-width: 768px) {
    display: block;
    position: relative;
    margin-top: 10%;
    left: 0;
    right: 0;
    
    h1 {
      text-align: center;
    }
    p{
      color:#ffffffd9;
      line-height: 2em;
      width: 85%;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    span {
        color: pink;
    }

  }
`

const ProcessContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: visible;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  background-image: url("process-bg.png");
  background-size: cover;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;

  h2{
    width: 100%;
    color: white;
  }

  @media only screen and (max-width: 768px) {
    background-image: none;
    display: block;
  
  
  }
  `

  const Row1 = styled.div`
    width: 25%;
    height: 50%;
    display: inline-block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    
    @media only screen and (max-width: 768px) {
    width: 50%;
    display: inline-block;
    }
  `

  const Row2 = styled.div`
    width: 25%;
    height: 50%;
    display: inline-block;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    
    @media only screen and (max-width: 768px) {
      width: 50%;
      display: inline-block;

      }
  `
  const Row3 = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
   
    @media only screen and (max-width: 768px) {
      width: 50%;
      display: inline-block;

      }
    `
  const Row4 = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
      width: 50%;
      display: inline-block;

      }

    `

  const Ellipse = styled.div`
  background-color: #000000;
  width: 10em;
  height: 10em;
  border: 1px solid ;
  border-color: ${props => props.borderColor};
  border-radius: 100%;
  inset: ${props => props.position};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media only screen and (max-width: 768px) {
    width: 6em;
    height: 6em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    }
`
const processImage = styled.img `
  width: 25%;
  height: 25%;
  

`
const ProcessContainer = styled.div`
  width: 100%;



`
const ContentTextContainer = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 60px;
  
  @media only screen and (max-width: 768px) {
  padding-left: 15px;
  }

`
const NumberText = styled.h1`
  width: 100%;
  margin-top: 3%;
  color: white;
  font-size: 24px;
  text-align: left;
  font-family: Roboto;
  font-weight: 700;

`
const ContentTitle = styled.h3`
  width: 100%;
  margin-top: 5%;
  color: white;
  font-size: 21px;
  text-align: left;
  font-family: Roboto;
  font-weight: 400;

`
const ContentSummary = styled.p`
  width: 100%;
  height: auto;
  margin-top: 5%;
  color: white;
  font-size: 12px;
  text-align: left;
  font-family: Roboto;
  font-weight: 300;
  line-height: 24px;
`



const ProcessSection = () => {
    return (
      <>
      <Default>
      <a id="theProcess">
        <SectionWrapper>
            <ProcessSubText>
          <h1>The Process</h1>
          <p>
            We take you from an idea to your <br></br><span>favorite blockchains</span> through a step by step process.
          </p>
          </ProcessSubText>
        <ProcessContentWrapper>
          <Row1>
            <Ellipse style={{marginTop: "45%", marginLeft: "30%"}}>
                <img style={{width: "70%", height: "auto"}} src="./consultation-static.png"></img>
            </Ellipse>
            <ContentTextContainer>
                <NumberText>01</NumberText>
                <ContentTitle>Consultation</ContentTitle>
                <ContentSummary>Kick things off with an initial consultation. Schedule a video call that fits your schedule and tell us everything about your project and needs from your team.</ContentSummary>
            </ContentTextContainer>

          </Row1>
          <Row2>
          <ContentTextContainer>
                <NumberText style={{marginTop:"40%"}}>02</NumberText>
                <ContentTitle>Development</ContentTitle>
                <ContentSummary>Next we get to building using the latest technologies to bring your idea’s to life and on to the blockchain. We support all EVM compatible networks:
                  <spam style={{color: "#34FFF6"}}> Ethereum | Polygon | Avalanche | Fantom | Binance Smart Chain</spam></ContentSummary>

          </ContentTextContainer>
          <Ellipse style={{marginTop: "5%", marginLeft: "auto", marginRight: "auto"}}>
                <img style={{width: "70%", height: "auto"}} src="./cmndLine-static.png"></img>
          </Ellipse>
            
          </Row2>
          <Row3>
          <Ellipse style={{marginTop: "25%"}}>
                <img style={{width: "70%", height: "auto"}} src="./testing-static.png"></img>
            </Ellipse>
            <ContentTextContainer style={{paddingLeft: "30px!important"}}>
                <NumberText>03</NumberText>
                <ContentTitle>Testing</ContentTitle>
                <ContentSummary>Quality assurance at its finest. <span style={{color: "#EDB5C7"}}> We battle-test your smart contracts on the Test Nets</span> as well as protect them from malicioius actors using known best practices.</ContentSummary>
            </ContentTextContainer>

          </Row3>
          <Row4>
          <ContentTextContainer>
                <NumberText style={{marginTop:"5%"}}>04</NumberText>
                <ContentTitle>Deployment</ContentTitle>
                <ContentSummary>Finally you’ve made a new contribution to the future of the internet. We walk you through deployment and provide monthly maintainence packages for your projects needs after launch. </ContentSummary>

          </ContentTextContainer>
          <Ellipse style={{marginTop: "5%"}}>
                <img style={{width: "70%", height: "auto"}} src="./sphere-outline-static.png"></img>
          </Ellipse>

          </Row4>
        </ProcessContentWrapper>
        </SectionWrapper>
      </a>
      </Default>
      <Mobile>
      <a id="theProcess">
      <SectionWrapper>
            <ProcessSubText>
          <h1>The Process</h1>
          <p>
           Taking you from an idea, to your <br></br><span>favorite blockchains</span> through a step by step process.
          </p>
          </ProcessSubText>
        <ProcessContentWrapper>
          <Row1>
            <Ellipse style={{marginTop: "25%", marginLeft: "30%"}}>
                <img style={{width: "70%", height: "auto"}} src="./consultation.gif"></img>
            </Ellipse>
            <ContentTextContainer>
                <NumberText>01</NumberText>
                <ContentTitle>Consultation</ContentTitle>
                <ContentSummary>Kick things off with an initial consultation. Schedule a call that fits your schedule and tell us everything about your project and needs from your team.</ContentSummary>
            </ContentTextContainer>

          </Row1>
          <Row2>
          <Ellipse style={{marginTop: "7%", position: "relative", top: "10px"}}>
                <img style={{width: "70%", height: "auto"}} src="./cmndLine.gif"></img>
          </Ellipse>
          <ContentTextContainer>
                <NumberText style={{marginTop:"10%", top: "3px"}}>02</NumberText>
                <ContentTitle style={{marginTop:"10px"}}>Development</ContentTitle>
                <ContentSummary style={{marginTop:"30px", lineHeight:"16px"}}>We get to building using the latest technologies to bring your idea’s to life and on to the blockchain. We support all EVM compatible networks:
                  <spam style={{color: "#34FFF6"}}> Ethereum | Polygon | Avalanche | Fantom | Binance Smart Chain</spam></ContentSummary>

          </ContentTextContainer>
          </Row2>
          <Row3>
          <Ellipse style={{marginTop: "25%"}}>
                <img style={{width: "70%", height: "auto"}} src="./testing.gif"></img>
            </Ellipse>
            <ContentTextContainer style={{paddingLeft: "30px!important"}}>
                <NumberText>03</NumberText>
                <ContentTitle>Testing</ContentTitle>
                <ContentSummary>Quality assurance at its finest. <span style={{color: "#EDB5C7"}}> We battle-test your smart contracts on the Test Nets</span> and protect them from malicioius actors using known best practices.</ContentSummary>
            </ContentTextContainer>

          </Row3>
          <Row4>
          <Ellipse style={{marginTop: "5%", top: "1px"}}>
                <img style={{width: "70%", height: "auto"}} src="./sphere-outline.gif"></img>
          </Ellipse>
          <ContentTextContainer>
                <NumberText style={{marginTop:"5%"}}>04</NumberText>
                <ContentTitle>Deployment</ContentTitle>
                <ContentSummary>Finally you’ve made a new contribution to the future of the internet. We walk you through deployment and provide monthly maintainence packages for your projects needs after launch. </ContentSummary>

          </ContentTextContainer>
          </Row4>
        </ProcessContentWrapper>
                     






        </SectionWrapper>
        </a>
      </Mobile>
      </>
    )
}

export default ProcessSection;