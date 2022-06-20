import React from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'

const HeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 90%;
  margin: auto;
  justify-content: center;
  max-width: 1440px;

`

const Hero = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0em;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 2em;

  }
`

const LeftSideHero = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  padding-left: 4em;

  h1 {
    margin: 0;
    font-size: 4.5em;
    overflow: hidden;
    font-weight: 800;
    /* border-right: .15em solid white; */
    /* animation: typing 3.5s steps(40, end) forwards; */

  }

   p{
     color: #ffffff;
   }

  p span {
    font-weight: 750;
    color: #34fff6;
  }

  @media only screen and (max-width: 1172px) {
    h1 {
      font-size: 3.3em;
    }
  }

  @media only screen and (max-width: 768px) {
    position: relative;
    z-index: 1;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 90%;
    padding: 0;
    margin-top: 5%;
    
    h1{
      margin-top: 10%;
      font-size: 2.3em;
    }

    br:first-child{
      display: none;
    }

    p{
      width: 90%;
      color: white;
      margin-top: 8%;
    }

  }
`

const GetInTouchBtn = styled.div`
  background-color: white;
  border-radius: 0.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em 1em;
  color: #080809;
  width: fit-content;
  height: 3em;
  margin-top: 2em;
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  img {
    object-fit: contain;
    height: 0.7em;
    margin-left: 2em;
  }

  :hover {
    background-color: #080809;
    color: white;
  }

  :hover p{
    color: white;
  }

  p {
    font-size: 1em;
    letter-spacing: 0.2em;
    font-weight: bolder;
    color: black;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 6em;

  }


`

const LearnMore = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 1em;

  img {
    height: 1.4em;
    margin-right: 1em;
    cursor: pointer;
  }

  p {
    cursor: pointer;
    color:#E7E7E7;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 1.5em;
    p{
      width: 100%;
    }
  }
`

const RightSideHero = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    align-items: center;
    top: -80%;
    z-index: 0;

  }

`

const HeroCube = styled.img`
  object-fit: contain;
  height: 32em;
  animation: cube-hover 2s infinite ease-in-out alternate;

  @media only screen and (max-width: 1172px) {
    height: 25em;
  }

  @media only screen and (max-width: 768px) {
    position: absolute;
    height: 20em;
  }

  @keyframes cube-hover {
    0% {
      transform: translateY(0em);
    }
    100% {
      transform: translateY(2em);
    }
  }

`

const BlockchainLogo = styled.img`
  object-fit: contain;
  position: absolute;
  height: 4em;

  @keyframes blockchainLogoLeft {
    0% {
      transform: rotateZ(0deg) translateY(0em);
    }
    50% {
      transform: rotateZ(180deg) translateY(1em);
    }
    
    100% {
      transform: rotateZ(360deg) translateY(0em);

    }
  }

  @keyframes blockchainLogoRight {
    0% {
      transform: rotateZ(0deg) translateY(0em);

    }

    50% {
      transform: rotateZ(180deg) translateY(1em);
    }

    100% {
      transform: rotateZ(-360deg) translateY(0em);

    }
  }


`

const HeroColoredText = styled.div`
 h1{
  font-size: 1em;
  font-weight: 800;
  color:#edafc3; 
 }

 span{
   color:#34fff6;
 }
`




const HeroContentComponent = () => {
  return (
    <HeroContent>
      <Hero>
        <LeftSideHero>
          <h1>
            Helping Creators <br /> Innovate In Web3 <br />
            <HeroColoredText ><h1>NFTs <span>+</span> Metaverse</h1></HeroColoredText>
          </h1>
          <p className={styles.heroSubText}>
           A custom blockchain services company.
            <br /> PFPs, Art, Fashion, Music, Gaming, and Metaverse NFTs{' '}
          </p>
          <a href="#contact">
          <GetInTouchBtn>
            <p>GET IN TOUCH</p>
            <img src={'./arrow.png'} />
          </GetInTouchBtn>
          </a>
          <a href="#theProcess">
          <LearnMore>
            <img src={'./play-btn.png'} />
            <p>Learn More About Our Process</p>
          </LearnMore>
          </a>
          <BlockchainLogo className={styles.binance} src={'./binance.png'} style={{animation: "blockchainLogoRight 10s infinite ease-in-out"}} />

        </LeftSideHero>
        <RightSideHero>
          <HeroCube src={'./cube.png'} />
          <BlockchainLogo className={styles.ethereum} src={'./ethereum.png'} style={{ animation: "blockchainLogoRight 10s infinite ease-in-out"}} />
          <BlockchainLogo className={styles.polygon} style={{animation: "blockchainLogoLeft 10s infinite ease-in-out"}} src={'./polygon.png'} />
          <BlockchainLogo className={styles.avalanche} src={'./avalanche.png'} style={{ animation: "blockchainLogoLeft 10s infinite ease-in-out"}} />
          <BlockchainLogo className={styles.fantom} src={'./fantum.png'} style={{animation: "blockchainLogoRight 10s infinite ease-in-out"}} />
        </RightSideHero>
      </Hero>
    </HeroContent>
  )
}

export default HeroContentComponent
