import React from 'react';
import styled from "styled-components";
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

const FooterContainer = styled.div`
    width: 100vw;
    height: 70px;
    background-color: black;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    position: initial;
    bottom: 0;
    z-index: 999999;

    @media only screen and (max-width: 768px) {
        position: initial;
        flex-direction: column;
        height: 140px;
    }

`
const Column = styled.div`
width: 25%;
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
`

const SocialContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media only screen and (max-width: 768px) {
        height: 20px;
    }
`
const SocialLogo = styled.img`
    width: 25px;
    height: 25px;
    margin: 10px;

`
const Copyright = styled.h2`
    font-family: Roboto;
    font-size: 14px;
    width: 33%;
    text-align: center;

    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-top: -5px;
        margin-bottom: -15px;
    }
`

const Footer = () => {
    return (
        <>
        <Default>
        <FooterContainer>
            <Copyright>© OPENSPACES. All Rights Reserved.</Copyright>
            <SocialContainer>
                <SocialLogo src="/IG.png"></SocialLogo>
                <SocialLogo src="/linkedin.png"></SocialLogo>
                <SocialLogo src="/youtube.png"></SocialLogo>
            </SocialContainer>
            <Copyright>info@openspaces.design</Copyright>
        </FooterContainer>
        </Default>
        <Mobile>
            <FooterContainer>
                <Copyright>© OPENSPACES. All Rights Reserved.</Copyright>
                <Copyright>info@openspaces.design</Copyright>
                <SocialContainer>
                    <SocialLogo src="/IG.png"></SocialLogo>
                    <SocialLogo src="/linkedin.png"></SocialLogo>
                    <SocialLogo src="/youtube.png"></SocialLogo>
                </SocialContainer>
            </FooterContainer>
        </Mobile>
        </>
    )
}

export default Footer;