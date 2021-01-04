import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const About = ({ siteTitle }) => (
  <Section>
    <Title>Hey - I'm Chris!</Title>
    <Text>
      An Digital Developer for Leeds Beckett University, 1st Class Graduate in Web
      Design & Development and a former Student of the Year. Highley Skilled,
      knowledgeable and experienced with Industry-standard UX tech tooling
      associated with designer & developer competencies and proficiencies.
    </Text>
    <Link className="btn" to="#projects">
      {" "}
      Take a Look At My Work ▼{" "}
    </Link>
  </Section>
)

export default About

const Section = styled.section`
  border-bottom: 1px solid #eee;
  padding: 10px 0px;
`
const Title = styled.h2``

const Text = styled.p``
