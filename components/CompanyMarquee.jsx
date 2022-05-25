import React from 'react'
import styled from 'styled-components'


const companyName = styled.h3`
    display: inline-block;
    font-family: Helvetica;
    font-size: 36px;
    margin-left: 20px;
    margin-right: 20px;


`

const marqueeContainer = styled.div`   
    width: 100%;
    height: 150px;
    // display: flex;

`


const CompanyMarquee = () => {
    return (
     <marqueeContainer>
         <marquee width="100%" height="100%">
            <companyName>Georgia Government</companyName>
            <companyName>Honda</companyName>
            <companyName>FedEx</companyName>
            <companyName>Delta</companyName>
            <companyName>Arvest</companyName>
            <companyName>Accenture</companyName>
         </marquee>
     </marqueeContainer>
    )
  }
  
  export default CompanyMarquee;