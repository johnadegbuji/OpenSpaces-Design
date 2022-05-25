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


const Card = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0c0c0c;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 40px;
    padding-bottom: 40px;
    border-radius: 20px;
    border: white solid;
    border-width: 2px;
    
    @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 10px;
    }
`
const ImageWrapper = styled.div`
  width: 25%;
  height: auto;
  display: inline-block;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: block;
    width: 25%;
  }
  
`
const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`
const ContentWrapper = styled.div`
  width: 75%; 
  display: inline-block;   

  h1 {
    font-size: 18px;
    font-family: Roboto;
    font-weight: 600;
  }
  p{
    font-family: Roboto;
    font-weight: 300;
    font-size: 14px;
    width: 90%;
    line-height: 20px;
    
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    h1{
      text-align: center;
      font-size: 18px;
    }
    p{
      font-size: 12px;
      width: 98%;
      line-height: 16px;
    }
  }
`



const PerksCard = (props) => {
    return (
    <>
    <Default>
    <Card>
      <ContentWrapper>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ContentWrapper>
      <ImageWrapper>
        <CardImage src={props.image} />
      </ImageWrapper>
    </Card>
    </Default>

    <Mobile>
      <Card>
        <ImageWrapper>
          <CardImage src={props.image} />
        </ImageWrapper>
        <ContentWrapper>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ContentWrapper>
      </Card>
    </Mobile>
    </>
  
    )
  }

  export default PerksCard; 