import React from "react"
import styled from "styled-components"
import Job from "../modules/Experince"

const Jobs = ({ siteTitle }) => (
  <Section>
    <Title>Experience</Title>
    <Job
      title="Front End Developer"
      link="https://www.enghouse.com/"
      company="Enghouse Systems"
      image={require("../images/companys/enghouse/enghouse.svg")}
      darkimage={require("../images/companys/enghouse/enghouse-light.svg")}
      alt="Enghouse Networks"
      text="
      As a Front End Developer, I work within Enghouses in-house development team. Working across a wide variety of client projects.  Implementing a new UI for their core product and improving existing live sites. Taking designs from their UX designers and transforming those designs into HTML and CSS for the java development team.
      "
      content="
                <ul>
                        <li>To create compliant HTML/CSS pages using Bootstrap or React, from designs provided by UX Designers.</li>
                        <li>Implement and troubleshoot functionality using JavaScript and JQuery and troubleshoot problems and
                        issues with existing HTML/CSS.</li>
                        <li>Implement new designs from UX Designers into complient HTML/CSS pages</li>
                        <li>Adhering to web standards and ensure optimisation for performance, accessibility, SEO and cross-browser compatibility.</li>
                        <li>Enhance existing products and maintain legacy products and systems</li>
                        <li>Understand the latest and up and coming cutting edge web technology</li>
                    </ul>"
    />
    <Job
      title="Digital Developer"
      link="https://www.leedsbeckett.ac.uk/"
      company="Leeds Beckett University"
      image={require("../images/companys/lbu.svg")}
      darkimage={require("../images/companys/lbudark.svg")}
      alt="Leeds Beckett University"
      text="
                    Carrying out digital development work for the University’s website transformation project ‘Website 2020’
                    Using their CMS, Sitecore to build pages, templates and content for the website and to ensure all development
                    is tested across all key platforms and devices."
      content="
                <ul>
                        <li>To create compliant HTML/CSS pages using C# .Net, either from new designs or using existing
                        templates/code. </li>
                        <li>To implement and troubleshoot functionality using JavaScript and JQuery and troubleshoot problems and
                        issues with existing HTML/CSS.</li>
                        <li>To work collaboratively with the project team, key internal stakeholders and thier digital agency to
                        deliver our ambitious new website.</li>
                        <li>To scope and build the website in accordance with project’s agreed content strategy, content
                        architecture and best practice information architecture and design.</li>
                        <li>To implement code and templates in web systems including their CMS and if required to thier CRM system.
                        </li>
                        <li>To adhere to web standards and ensure optimisation for performance, accessibility, SEO and cross-browser
                        compatibility.</li>
                    </ul>"
    />
    <Job
      title="Web & Digital Assistant "
      link="https://www.uclan.ac.uk/"
      company="University Of Central Lancashire"
      image={require("../images/companys/uclan.svg")}
      darkimage={require("../images/companys/uclandark.svg")}
      alt="University Of Central Lancashire"
      text="
                Working in a fast-paced and dynamic marketing environment to deliver an effective digital offering to
                    prospective students, their influencers, UCLAN staff, students and other affiliates.
                    "
      content="
                    <ul>
                    <li>The curation of user experiences for digital products and services consumed by current and prospective UCLan students </li>
                    <li>Generating new ideas for content; including gamification and AR and building </li>
                    <li>Conducting market research, collecting feedback and data interpretation</li>
                    <li>Supporting internal product development operations and teams</li>
                    <li>User journey mapping</li>
                    <li>Personalisation and implementing strategic solutions</li>
                    <li>Creating new pages to appeal to students seeking to study specific industry areas</li>
                    </ul>"
    />
  </Section>
)

export default Jobs

const Section = styled.section`
  border-bottom: 1px solid #eee;
  padding: 10px 0px;
`
const Title = styled.h2``
