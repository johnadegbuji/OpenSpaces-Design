import React from 'react'
import styled from 'styled-components'
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
flex-direction: row;
// background-image: url('./services-bg.png');
// background-size: contain;
// background-position: center;
// background-repeat: no-repeat;

@media only screen and (max-width: 768px) {
    height: 100vh;
    flex-direction: column;
    padding-top: 18em;

}

`
const ServicesSubText = styled.div`
  position: absolute;
  top: 0;
  left: 65px;
  width: 100%;

  p{
    color:#ffffff;
    line-height: 2em;
    width: 80%;
    font-size: 14px !important;
    font-family: 'Roboto';
    font-weight: 500;
    line-height: 28px;
    }
  span {
      color: pink;
  }

  @media only screen and (max-width: 768px) {
  left: 0;
  right: 0;
  text-align: center;

  p {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
  }

  }

`
const LeftSide = styled.div`
    width: 30%;
    height: 100%;
    display: block;
    position: relative;
    // background-color: red;
    
    @media only screen and (max-width: 768px) {
    width: 100%;
    height: 125px;
    }
`
const RightSide = styled.div`
    width: 70%;
    height: 100%;
    display: block;
    position: relative;

    img{
    width: 100%;
    margin-top: -15%;
    }

    

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 60%;
        margin-top: -5%;

        img{
        width: 100%;
        margin-top: 5%;
        margin-bottom: 5%;
        }
      
    }
`
const ServicesContent = styled.div`
    width: 100%;
    display: flex;

`

const ServicesSection = () => {
    return(
        <>
        <Default>
        <a id="services">
        <SectionWrapper>
            <LeftSide>
                <ServicesSubText>
                 <h1>All Services</h1>
                 <p>OPENSPACES provides a number of services for both new and experienced web3 related projects. All services are listed to the right:</p>   
                </ServicesSubText>
            </LeftSide>
            <RightSide>
                 <img style={{width:"100%", marginTop:"-15%" }} src="./all-services.png"></img>
            </RightSide>
        </SectionWrapper>
        </a>
        </Default>
        <Mobile>
        <a id="services">
        <SectionWrapper>
            <LeftSide>
                <ServicesSubText>
                 <h1>All Services</h1>
                </ServicesSubText>
            </LeftSide>
            <RightSide>
                 <img style={{width:"100%", marginTop:"0%" }} src="./all-services.png"></img>
            </RightSide>
        </SectionWrapper>
        </a>
        </Mobile>
        </>
    )
}

export default ServicesSection;