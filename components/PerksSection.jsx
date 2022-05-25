import React from 'react'
import styled from 'styled-components'
import PerksRow from './PerksRow'

const SectionWrapper = styled.div`
height: 95vh;
width: 100%;
display: flex;
position: relative;
max-width: 1440px;
margin: auto;
padding-top: 4em;
overflow: visible;
flex-direction: row;

@media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    align-content: center;
    padding-top: 5em;
}
`
const PerksSubText = styled.div`
  position: relative;
  top: 0;
  left: 65px;
  width: 100%;

  p{
    position: relative;
    z-index: 2;
    color:#ffffff;
    width: 80%;
    font-size: 14px !important;
    font-family: 'Roboto';
    font-weight: 500;
    line-height: 28px;
  }
  span {
      color: pink;
  }

  img{
      position: absolute;
      width: 60%;
      top: 65%;
      left: 4%;
      right: auto;
      transform: rotate(30deg);
      opacity: .2;
  }

  @media only screen and (max-width: 768px) {
  left: 0;
  right: 0;
  
  h1{
    width: 100%;
    text-align: center;
    margin-top: 10%; 
    }
  p{
      width: 85%;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
  }

  img{
    position: absolute;
    width: 60%;
    top: 5%;
    left: 20%;
    right: auto;
    transform: rotate(50deg);
    opacity: .2;
}

}

`
const LeftSide = styled.div`
    width: 35%;
    height: 100%;
    display: block;
    position: relative;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`
const RightSide = styled.div`
    width: 60%;
    height: 100%;
    display: block;
    position: relative;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`
const PerksSection = () => {
    return(
        <a id="perks">
        <SectionWrapper>
            <LeftSide>
            <PerksSubText>
                <h1>Perks</h1>
                <p>We want to be sure all clients are comfortable as well as apart of the building process. We provide the below benefits to all clients</p>
                <img src="./earth-rocket.png"></img>
            </PerksSubText>
            </LeftSide>
            <RightSide>
                <PerksRow></PerksRow>
            </RightSide>
        </SectionWrapper>
        </a>
    )
}

export default PerksSection;