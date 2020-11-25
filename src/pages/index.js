import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// Page Sections
import About from "../components/sections/AboutSection"
import Jobs from "../components/sections/JobsSection"
import Certification from "../components/sections/CertificationsSection"
import Projects from "../components/sections/ProjectsSection"
import SkillSection from "../components/sections/SkillSection"


const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
      <About />
      <Jobs />
      <Certification />
      <Projects id="projects" />
      <SkillSection/>
  </Layout>
)

export default IndexPage
