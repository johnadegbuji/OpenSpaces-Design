import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import AboutCard from './AboutCard'
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
  max-width: 1440px;
  margin: auto;
  padding-top: 8em;
  overflow: visible;
`

const AboutTextWrapper = styled.div`
  height: 100%;
  width: 45%;
  overflow: visible;

  /* background-color: blue; */
`


const AboutContentWrapper = styled.div`
  height: 100%;
  width: 55%;
  overflow: visible;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  /* background-color: red; */
  
  @media only screen and (max-width: 768px) {
    
    display: flex;
    margin-top: -5%;
    width: 100%;
    padding: 0;
    align-content: center;
  }
`


const AboutTextContainer = styled.div`
  position: relative;
`


const AboutText = styled.div`
  position: absolute;
  top: 0;
  padding-left: 64px;

  p{
    color:#ffffffd9;
    line-height: 2em;
    width: 85%;
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    font-size: 1.2em;
  }

  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    padding-left: 10px;
    padding-right: 10px;

    p{
      color:#ffffffd9;
      line-height: 1.35em;
      width: 65%;
      font-family: 'Rubik', sans-serif;
      font-weight: 400;
      font-size: .9em;
    }
  }
`


const BlobImage = styled.img`
  width: 25em;
  overflow: visible;
  position: absolute;
  left: -10em;
`

const Ellipse = styled.div`
  background-color: #101012;
  width: .6em;
  height: .6em;
  border: 1px solid ;
  border-color: ${props => props.borderColor};
  border-radius: 100%;
  position: absolute;
  inset: ${props => props.position};
`


const AboutSection = () => {
  return (
    <>
    <Default>
    <a id="about">
    <SectionWrapper>
      <AboutTextWrapper>
        <AboutTextContainer>
          <Ellipse 
          borderColor='#edafc3'
          position='-3em 40%'
          />
          <Ellipse 
          borderColor='#edafc3'
          position='35em 60%'
          />
          <Ellipse 
          borderColor='#34FFF6'
          position='25em 70%'
          />
          <BlobImage src={'./about-blob.svg'} />
          <AboutText>
          <h1>How We Help You</h1>
          <p>
            OPENSPACES is a full service boutique NFT development agency, based in Los Angeles. We focus on helping creatives create custom blockchain powered solutions. 
            <br></br><br></br>We help our clients with:<br></br>
            - Custom Smart Contracts <br></br>
            - NFT Minting Sites <br></br>
            - Token-Gated Sites <br></br>
            - UX/UI Design <br></br>
            - Standard Web2 Sites + more
            <br></br>

          </p>
          </AboutText>
        </AboutTextContainer>
      </AboutTextWrapper>
      <AboutContentWrapper>
          <AboutCard 
          cardImage='./metaverse2.png'
          cardTitle='NFT Strategy'
          barColor='#edafc3'
          cardInfo='We help you figure out just where to start, or how to navigate and problem solve any unforseen roadblocks'
          />
          <AboutCard 
          cardImage='./metaverse1.png'
          cardTitle='Development'
          barColor='#34FFF6'
          cardInfo='We provide full service development. We code secure smart contracts and beautiful websites.'
          />
          <AboutCard 
          cardImage='./metaverse3.png'
          cardTitle='UX/UI Design'
          barColor='#34FFF6'
          cardInfo='Let us handle the layout and design of your next project. Web3 needs a refined touch 👌 '
          />
          <AboutCard 
          cardImage='./metaverse4.png'
          cardTitle='SEO'
          barColor='#edafc3'
          cardInfo='Organic traffic is vital for any protocol looking to garner users. We specialize in SEO for Web3 companies. '
          />
      </AboutContentWrapper>
    </SectionWrapper>
    </a>
    </Default>
    
    <Mobile>
    <a id="about">
      <SectionWrapper className={styles.aboutSectionWrapper}>
        <AboutTextWrapper className={styles.aboutTextWrapper}>
          <AboutTextContainer>
            <Ellipse 
            borderColor='#edafc3'
            position='-3em 40%'
            />
            <Ellipse 
            borderColor='#edafc3'
            position='35em 60%'
            />
            <Ellipse 
            borderColor='#34FFF6'
            position='25em 70%'
            />
            <BlobImage src={'./about-blob.svg'} />
            <AboutText>
            <h1 className={styles.aboutTextMobileH1}>How We Help You</h1>
            <p className={styles.aboutTextMobileP}>
            
            OPENSPACES is a full service boutique NFT development agency, based in Los Angeles. We focus on helping creatives create custom blockchain powered solutions. 
            <br></br><br></br>We help our clients with:<br></br>
            Custom Smart Contracts <br></br>
            NFT Minting Sites, Token-Gated Sites, UX/UI Design, standard Web2 Sites and more.
            <br></br>

            </p>
            </AboutText>
          </AboutTextContainer>
        </AboutTextWrapper>
        <AboutContentWrapper>
            <AboutCard 
            cardImage='./metaverse2.png'
            cardTitle='NFT Strategy'
            barColor='#edafc3'
            />
            <AboutCard 
            cardImage='./metaverse1.png'
            cardTitle='Development'
            barColor='#34FFF6'
            />
            <AboutCard 
            cardImage='./metaverse3.png'
            cardTitle='UX/UI Design'
            barColor='#34FFF6'
            />
            <AboutCard 
            cardImage='./metaverse4.png'
            cardTitle='SEO'
            barColor='#edafc3'
            />
        </AboutContentWrapper>
      </SectionWrapper>
      </a>
    </Mobile>
  </>
  )
}

export default AboutSection
