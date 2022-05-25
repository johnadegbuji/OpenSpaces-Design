import React from 'react'
import styled from 'styled-components'
import SummaryCard from './SummaryCard'

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: fit-content;
  max-width: 1440px;
  margin: auto;
  margin: 5em auto;
`

const SummayCardRow = () => {
  return (
    <Row>
      <SummaryCard
        cardImgSize="16em"
        cardImg={'./code-editor.png'}
        cardTitleFirstWord={'Industry'}
        cardTitleSecondWord={'Best Practices'}
        cardTitleSecondWordColor={'#EDAFC3'}
        cardText={'We stick to industry accepted best practices to ensure your projects smart contract security and quality.'}
        cardBgColor={'linear-gradient( 179.16deg,#263238 17.29%,rgba(0, 0, 0, 0) 153.07%)'}
      />
      <SummaryCard 
        cardImgSize="15.2em" 
        cardImg={'./nft-example.png'} 
        cardTitleFirstWord={'NFT'}
        cardTitleSecondWord={'Strategy'}
        cardTitleSecondWordColor={'#34FFF6'}
        cardText={'Direct consultation on your NFT strategy to get the best outcomes for your project.'}
        cardBgColor={'linear-gradient(180deg, #B39F00 16.78%, rgba(0, 0, 0, 0) 132.9%)'}
      
      />
      <SummaryCard 
        cardImgSize="16em" 
        cardImg={'./coins.png'} 
        cardTitleFirstWord={'Gas'}
        cardTitleSecondWord={'Optimization'}
        cardTitleSecondWordColor={'#EDAFC3'}
        cardText={'We build all smart contracts in a gas-efficient way to save you and community in unnecessary network fees.'}
        cardBgColor={'linear-gradient(180.18deg, #875038 16.88%, rgba(15, 17, 26, 0) 122.67%)'}
        cardImgPosition={'-6em'}
        />
    </Row>
  )
}

export default SummayCardRow
