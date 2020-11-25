import React from 'react'
import styled from 'styled-components'

const FooterSection = ({ siteTitle }) => (
  <FooterArea>
    <Footer>
      <FooterText>Last Updated October 2020</FooterText>
    </Footer>
  </FooterArea>
)

export default FooterSection

const FooterArea = styled.div`
    background: #333;
    color: white;
    text-align: center;
    margin: 0;
    padding: 16px;
`

const Footer = styled.footer`
`

const FooterText = styled.p`
`