import React from 'react';
import styled from 'styled-components'
import { Widget } from '@typeform/embed-react'



const SectionWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: block;
  position: relative;
  max-width: 1440px;
  margin: auto;
  padding-top: 0em;
  padding-bottom: 35em;
  margin-bottom: 0%;
  overflow: visible;
  margin-top: 10em;

  img{
    position: absolute;
    width: 60%;
    top: 0%;
    left: 4%;
    right: auto;
    // transform: rotate(30deg);
    opacity: .2;
    z-index: 0;
}
@media only screen and (max-width: 768px) {
    height: 55vh;

}
`

const Header = styled.h1`
    font-size: 28px;
    text-align: center;
    display: block;
    width: 100%;

    @media only screen and (max-width: 768px) {
    font-size: 28px;
    }
`
const Text = styled.p`
    display: block;
    font-family: Roboto;
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
    width: 100%;
    text-align: center;
    
    @media only screen and (max-width: 768px) {
        font-size: 12px;
        width: 80%;
    }
`
const ContactContainer = styled.div`
    width: 75%;
    height: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10%;
    padding-bottom: 4em;

    @media only screen and (max-width: 768px) {
        width: 90%;
        height: 400px;
    }

`

const ContactForm = () => {
    return <Widget id="h1m2xZIc" style={{width:"100%", height: "100%"}} buttonText="Get In Touch" />
  }

const ContactSection = () => {
    return(
    <a id="contact">
    <SectionWrapper>
        <img src="./space-cubes.png"></img>
        <Header>Link and Build With Us</Header>
        <Text>Lets get to it! Scedule a free  consultation to discuss your project.
        <br></br><br></br>
        Rather send an email?
        <br></br>
        Send your inquiry to info@openspaces.design</Text>
        <ContactContainer>
            <ContactForm />
        </ContactContainer>
    </SectionWrapper>
    </a>
    )
    
}

export default ContactSection;