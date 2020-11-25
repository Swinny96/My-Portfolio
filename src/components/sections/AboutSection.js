import React from "react"
import styled from "styled-components"
import Link from 'gatsby-link'

const About = ({ siteTitle }) => (
    <Section>
        <Title>Hey - I'm Chris!</Title>
            <Text>An Digital Developer at Leeds Beckett University, an Web Design & Development graduate and a former Student of
                  the Year - Highly skilled knowledge and experience of working with industry standard UX tech tooling associated 
                  with designer and developer competencies and proficiencies.
            </Text>
            <Link className="btn" to="#projects"> Take Look At My Work ▼ </Link>
    </Section>
  )

export default About

const Section = styled.section`
  border-bottom: 1px solid #eee;
  padding: 10px 0px;
`
const Title = styled.h2`
`

const Text = styled.p`
`