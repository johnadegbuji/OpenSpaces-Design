import React from 'react'
import styled from 'styled-components'
import ServiceCard from './ServiceCard'
import SummaryCard from './SummaryCard'

const Row = styled.div`
  display: flex;
  width: 90%;
  height: fit-content;
  max-width: 1440px;
  margin: auto;
  margin: 12em auto 0 auto;
  display: flex;
  flex-direction: column;
`

const RowCards = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 4em;
    padding-right: 4em; 
`

const RowTitle = styled.h1`
/* letter-spacing: .4em; */
padding-left: 2.3em;
margin-bottom: 2em;

`

const ServiceCardRow = () => {
  return (
    <Row>
    {/* <RowTitle>OUR SERVICES</RowTitle> */}
    <RowCards>
    <ServiceCard title="NFT Minting" span="Sites" image='./computer-screen.gif'
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus est
    massa sodales sed. Maecenas lacus tempus rhoncus morbi senectus cum in
    in sit." />
    <ServiceCard title="Smart" span="Contracts" image="./smart-contract.gif"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus est
    massa sodales sed. Maecenas lacus tempus rhoncus morbi senectus cum in
    in sit."
    />
    <ServiceCard title="Marketing" span="Sites" image="./marketing-sites.gif"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus est
    massa sodales sed. Maecenas lacus tempus rhoncus morbi senectus cum in
    in sit."
    />
    </RowCards>
</Row>
   

  )
}

export default ServiceCardRow; 