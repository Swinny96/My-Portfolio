import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterSection = ({ siteTitle }) => (
  <FooterArea>
    <Footer>
      <FooterText>Last Updated April 2021</FooterText>
      <br></br>
      <FooterText>
        Made with
        <Link
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
          aria-label="React JS"
        >
          <FooterImage src={require("../images/react.png")} alt="React" />
        </Link>
      </FooterText>
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

const Footer = styled.footer``

const FooterText = styled.p`
  display: inline-flex;
  align-items: center;
`

const FooterImage = styled.img`
  width: 45px;

  @media (prefers-reduced-motion: no-preference) {
    animation: React-spin infinite 10s linear;
  }

  @keyframes React-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
