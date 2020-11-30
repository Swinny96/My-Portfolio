import React from "react"
import styled from "styled-components"
import Skill from "../modules/Skill"

const SkillSection = ({ siteTitle }) => (
    <Section>
        <Title>Skills</Title>
            <Skill
            percentage="100"
            skill="Adobe CS"
            />
            <Skill
            percentage="100"
            skill="HTML & CSS"
            />
            <Skill
            percentage="75"
            skill="PHP"
            />
            <Skill
            percentage="75"
            skill="Sketch"
            />
            <Skill
            percentage="75"
            skill="Figma"
            />
            <Skill
            percentage="50"
            skill="Javascript"
            />
            <Skill
            percentage="50"
            skill="React"
            />
            <Skill
            percentage="50"
            skill="Alexa Skill"
            />
            <Skill
            percentage="75"
            skill="Wordpress"
            />
    </Section>
  )

export default SkillSection

const Section = styled.section`
  border-bottom: 1px solid #eee;
  padding: 10px 0px;
`
const Title = styled.h2`
`