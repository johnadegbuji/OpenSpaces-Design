import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  height: 27em;
  width: 300px;
  border-radius: 2em;
  background-color: #0c0c0c;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1em;
`

const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  background-color: #040404;
  border-radius: 0em 0em 2em 2em;
  align-items: center;

  h1 {
    width: 75%;
    text-align: center;
    font-size: x-large;
    margin-top: 1em;
  }

  h1 span {
    color: #34fff6;
  }

  p {
    width: 75%;
    font-size: 0.8em;
    text-align: center;
  }
`

const ServiceCard = (props) => {
  return (
    <Card>
      <ImageWrapper>
        <CardImage src={props.image} />
      </ImageWrapper>
      <ContentWrapper>
        <h1>{props.title} <span>{props.span}</span></h1>
        <p>
          {props.description}
        </p>
      </ContentWrapper>
    </Card>
  )
}

export default ServiceCard
