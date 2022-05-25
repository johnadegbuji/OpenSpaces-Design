import React from 'react'
import styled from 'styled-components'

const CardImage = styled.img`
  object-fit: contain;
  height: ${(props) => props.cardImgSize};
  position: relative;
  top: ${(props) => props.imgPosition != undefined ? props.imgPosition : '-7em'};;
`

const Card = styled.div`
  height: 25em;
  width: 300px;
  border-radius: 3em;
    transition: .3s ease-in-out;

  :hover {
      transform: scale(1.04);
  }
  

`
const CardTopSection = styled.div`
  height: 30%;
  width: 100%;
  background: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  border-radius: 1em 1em 0em 0em;
`

const CardBottomSection = styled.div`
  height: 70%;
  width: 100%;
  background: linear-gradient(
    180deg,
    #222222 -73.91%,
    #0c0c0c 85.67%
  );
  border-radius: 0em 0em 1em 1em;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0em 1.5em 0em 1.5em;
  
  h2 {
      font-weight:800;
      margin: 0;
      letter-spacing: .1em;
  }

  p{
      margin: .6em 0 0 0;
  }
`

const CardTitleSecondWord = styled.h2`
    color: ${(props) => props.wordColor};
    margin: 0;
    /* font-size: 1em; */
`

const SummaryCard = (props) => {
  return (
    <Card>
      <CardTopSection bgColor={props.cardBgColor}>
        <CardImage 
            src={props.cardImg} 
            cardImgSize={props.cardImgSize} 
            imgPosition={props.cardImgPosition}
        />
      </CardTopSection>
      <CardBottomSection>
        <h2>{props.cardTitleFirstWord}</h2>
        <CardTitleSecondWord wordColor={props.cardTitleSecondWordColor}>{props.cardTitleSecondWord}</CardTitleSecondWord>
        <p>
            {props.cardText}
        </p>
      </CardBottomSection>
    </Card>
  )
}

export default SummaryCard
