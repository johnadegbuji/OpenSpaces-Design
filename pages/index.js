import styled from 'styled-components'
import Navbar from '../components/Navbar'
import HeroContent from '../components/HeroContent'
import DevEmployersBar from '../components/DevEmployersBar'
import AboutSection from '../components/AboutSection'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import ProcessSection from '../components/ProcessSection'
import ServicesSection from '../components/ServicesSection'
import PerksSection from '../components/PerksSection'
import CaseStudySection from '../components/CaseStudySection'
import ContactSection from '../components/Contact'
import Footer from '../components/Footer'
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


export default function Home() {
  return (
    <App>
      <Default>
      <HeroSection>
        <Navbar />
        <HeroContent />
      </HeroSection>
      <DevEmployersBar/>
      <AboutSection />
      <ProcessSection/>
      <ServicesSection/>
      <PerksSection/>
      <CaseStudySection/>
      <ContactSection/>
      <Footer/>
      </Default>
      
      <Mobile>
      <HeroSection>
        <Navbar />
        <HeroContent />
      </HeroSection>
      <DevEmployersBar/>
      <AboutSection />
      <ProcessSection/>
      <ServicesSection/>
      <PerksSection/>
      <CaseStudySection/>
      <ContactSection/>
      <Footer/>
      </Mobile>
    </App>
  )
}

const App = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const VerticalLine1 = styled.div`
  width: 0.02em;
  height: 100%;
  top: 107vh;
  position: absolute;
  background-color: #4f4f4f;
  right: 40%;
  z-index: -1;
`

const VerticalLine2 = styled.div`
  width: 0.02em;
  height: 100%;
  top: 107vh;
  position: absolute;
  background-color: #4f4f4f;
  right: 10%;
`

const HeroSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  align-items: center;
  /* overflow: hidden; */
  background: linear-gradient(
    123.56deg,
    rgba(237, 181, 199, 0.95) 5.59%,
    #211e1f 37.03%,
    #0b090a 60.12%,
    rgba(70, 163, 159, 0.75) 99.03%
  );
  background-size: 200%;
  animation: bg-animation 6s infinite ease-in-out alternate;

  @keyframes bg-animation {
    0% {
      background-position: 35%;
    }
    100% {
      background-position: 70%;
    }
  }
`

// const Wave = styled.img`
//   width: 100%;
//   background: url('./wave.svg');
//   height: auto;
//   align-self: flex-end;
//   justify-self: flex-end;
//   margin-top: auto;
//   background-repeat: no-repeat;
// `

// const TheProcess = styled.img`
//   /* max-width: 1440px; */
//   object-fit: contain;
//   width: 90%;
//   padding: 3em;
//   margin: auto;
// `
