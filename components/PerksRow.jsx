import React from 'react'
import styled from 'styled-components'
import PerksCard from './PerksCard'


const Row = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }


`

const RowTitle = styled.div`
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 3px;
    padding-left: 2.7em;
    margin-bottom: 1em;

`

const RowSubTitle = styled.div`
    margin-top: 15px;
    font-family: Roboto;
    font-weight: 200;
    letter-spacing: 1px;
    padding-left: 5.3em;



`

const RowCardsContainerLeft = styled.div`
    width: 50%;
    height: auto;
    display: inline-block;
    float: left;
    padding-left: 1em;
    padding-right: 1em;

    @media only screen and (max-width: 768px) {
    width: 85%;
    text-align: center;
    }

`
const RowCardsContainerRight = styled.div`
    width: 50%;
    height: auto;
    float: left;
    padding-right: 1em;
    padding-left: 1em;
    display: inline-block;

    @media only screen and (max-width: 768px) {
      width: 85%;
      text-align: center;
      }


`

const PerksRow = () => {
    return (
      <Row>
          <RowCardsContainerLeft>
            <PerksCard title="Dedicated Slack Channel" image="./slack.png" description="Share your concerns, assets, and development requests
            directly in your projects dedicated Slack channel. We respond Mon - Fri between 9AM - 5PM PST."/>
            <PerksCard title="Speedy Turnarounds" image="./clock.gif" description="Time is money. We’re careful enough to not miss anything crucial, and quick enough when meeting your team’s deadlines"/>     
          </RowCardsContainerLeft>
          <RowCardsContainerRight>
            <PerksCard title="Weekly Video Calls" image="./videocalls.gif" description="All clients receive weekly check-ins to view their projects progress"/>
            <PerksCard title="Real-Time Updates" image="./asana.png" description="Direct access to your project management timeline via Asana, to easily monitor the progress/phases of your project."/>   
          </RowCardsContainerRight>
        </Row>
    )
  }
  
  export default PerksRow; 