import React from "react"
import styled from "styled-components"
import Certifications from '../modules/Certifications'

const Certification = ({ siteTitle }) => (
    <Section>
        <Title>Certifications</Title>
            <Certifications 
                title="Design Kit: The Course for Human Centered Design"
                link="https://www.ideo.org/"
                company="IDEO"
                image={require('../images/companys/ideo.webp')}
                text="
                This 7-week course provided an introduction to the methods and tools of human-centred 
                design while tackling a real-world design challenge. Topics covered in this course 
                included: human-centred design research methods, concept generation, and rapidly 
                prototyping a solution to a poverty-related design challenge.
                "
                cert="https://plusacumen.novoed.com/#!/courses/design-kit-2019-3/statements/1912406"
            />
    </Section>
  )

export default Certification

const Section = styled.section`
  border-bottom: 1px solid #eee;
  padding: 10px 0px;
`
const Title = styled.h2`
`