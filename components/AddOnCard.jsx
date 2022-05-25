import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
    // background-color: #1C1C1C;
    height: 10em;
    width: 30em;
    margin: 1rem;
    border-radius: 1em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img{
        object-fit: contain;
    width: 25%;
    height: 5em;
    }

`

const CardTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 26px;
  text-align: center;
  width: 50%;



`

const AddOnImg = styled.img`
  width: 35%; 

`

const AddOnCard = (props) => {
  return (
    <Card>
        <CardTitle>{props.title}</CardTitle>
        <AddOnImg src={props.src}/>
    </Card>
  )
}

export default AddOnCard