import React from 'react'
import styled from 'styled-components'

const DevEmployersBarWrapper = styled.div`
  background-color: #0a0a0a;
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #606060;
    margin: 0;
    font-weight: lighter;
  }


  @media only screen and (max-width: 768px) {
    height: 12vh;

    p {
      color: #ffffff;
      margin: 0;
      font-weight: lighter;
    }
  
  }
`

const CompanyWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  -moz-animation: marquee 20s linear infinite;
        -webkit-animation: marquee 20s linear infinite;
        animation: marquee 20s linear infinite;

  img {
    width: 10%;
    height: auto;
    color: #606060;
    margin: 0;
    margin-top: .5em;
    
  }

  img:hover {
    color: #ffffff;
    margin: 0;
    margin-top: .5em;
    cursor: pointer;
    transition: all .1s ease-in;

    
  }
  

  @-moz-keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @-webkit-keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes marquee {
    0% {
      -moz-transform: translateX(100%);
      -webkit-transform: translateX(100%);
      transform: translateX(100%)
    }
    100% {
      -moz-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }
    height: 15vh;
    
    
    @media only screen and (max-width: 768px) {
      img {
        width: 35%;
        height: auto;
        color: #606060;
        margin-top: .5em;
        margin-left: 5%;
        margin-right: 5%;
        
      }
    
    }
`

const DevEmployersBar = () => {
  return (
    <DevEmployersBarWrapper>
      <CompanyWrapper>
        <img src="./fedex.png"></img>
        <img src="./honda.png"></img>
        <img src="./delta.png"></img>
        <img style={{marginTop: "-1%"}} src="./accenture.png"></img>
        <img src="./arvest.png"></img>
      </CompanyWrapper>
      <p style={{marginBottom:"0%"}}>Our Devs Have Worked For The Best</p>
    </DevEmployersBarWrapper>
  )
}

export default DevEmployersBar
