import React from 'react'
import styled from 'styled-components'
import AddOnCard from './AddOnCard'
import ServiceCard from './ServiceCard'
import SummaryCard from './SummaryCard'

const Row = styled.div`
  display: flex;
  width: 90%;
  height: fit-content;
  max-width: 1440px;
  margin: auto;
  margin: 3em auto 7em auto;
  flex-direction: column;
`

const RowCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 3em;
    padding-right: 3em; 
`

const RowTitle = styled.h1`
/* letter-spacing: .4em; */
// padding-left: 4em;
margin-bottom: 1em;
font-size: larger;
margin-top: 50px;
width: 100%;
text-align: center;
`

const AddOnRow = () => {
  return (
    <Row>
    {/* <RowTitle>ADD-ONS</RowTitle> */}
    <RowCards>
      <AddOnCard src="./whitelisting.gif" title="Whitelists"/>
      <AddOnCard src="./merkle-tree.gif" title="Merkle Trees"/>
      <AddOnCard src="./royalties.gif" title="Royalties"/>
      <AddOnCard src="./nft-reveals.gif" title="NFT Reveals" />
    </RowCards>
    <RowCards>
      <AddOnCard src="./trait-gallery.gif" title="NFT Trait Gallery"/>
      <AddOnCard src="./marketplaces.gif" title="NFT Marketplaces"/>
      <AddOnCard src="./staking.gif" title="Staking"/>
      <AddOnCard src="./dutch-auctions.gif" title="Dutch Auctions"/>
    </RowCards>
    </Row>
  )
}

export default AddOnRow