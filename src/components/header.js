import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Hero = ({ siteTitle }) => (
  <Header>
    <HeaderSection>
      <Toggle>
        <Icon>
          <Sun src={require('../images/toggle/sun.svg')} />
          <Moon src={require('../images/toggle/moon.svg')} />
        </Icon>
      </Toggle>
      <HeroImage src={require('../images/hero/webp/me.webp')}/>
        <Title>Christopher Swinton</Title>
        <SubTitle>Digital Developer for Leeds Beckett University</SubTitle>
        <ContactSection>
          <Link href="https://www.linkedin.com/in/cswinton96/" target="_blank" className="HeroContact">
            <Contact src={require('../images/linkedin.webp')}/>
          </Link>
          <Link href="mailto:cswintonux@gmail.com?Subject=UX" target="_blank" className="HeroContact">
            <Contact src={require('../images/gmail.webp')}/>
          </Link>
        </ContactSection>
    </HeaderSection>
  </Header>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero

const Header = styled.header`
`

const HeaderSection = styled.div`
    background: #333333;
    margin: 0 auto;
    align-items: center;
    padding: 30px;
    color: white;
    text-align: center;
    max-width: 1024px;

    .HeroContact{
      display: inline-grid;
    }

    .HeroContact img{
    filter: grayscale(100%);
    transition: .3s ease-in-out;
    }

    .HeroContact img:hover{
    filter: grayscale(0);
    transform: scale(1.2);
    }
`

const Toggle = styled.div`
    background-color: white;
    border-radius: 100%;
    height: 30px;
    width: 30px;
    padding: 0.5rem;
    display: grid;
    margin-left: auto;

    @media (prefers-color-scheme: dark){
      background-color: #222;
    }
`

const Icon = styled.div`
    width: 1.2em;
    height: 1.2em;
    grid-area: a;
`

const Sun = styled.img`
  display: block;

  @media (prefers-color-scheme: dark){
    display: none;
  }
`

const Moon = styled.img`
  display: none;

  @media (prefers-color-scheme: dark){
    display: block;
  }
`

const HeroImage = styled.img`
    display: block;
    margin: auto;
    width: 250px;
    height: auto;
    border: 5px solid white;
    border-radius: 50%;
`

const Title = styled.h1`
`

const SubTitle = styled.p`
`

const ContactSection = styled.div`
    
`

const Contact = styled.img`
    height: 40px;
    margin: 0 8px;
`
