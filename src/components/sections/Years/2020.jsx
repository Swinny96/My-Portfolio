import React from "react"
import styled from "styled-components"
import Project from "../../modules/Project"

const TwentyTwentyOne = ({ siteTitle }) => (
      <Year label="2021">
        <ProjectGroup>
          <Project
            title="SolidRoute Website"
            text=" SolidRoute is a bespoke software development company that supplies
                            systems to waste management organisations across the nation.
                            I am currently in the process of creating a website for the
                            company that is aiming to be launched soon."
            date="Q1 2021"
            status="Upcoming"
            url=""
            id="SolidRoute"
            image={require("./projects/website.png")}
            alt="SolidRoute"
          />
          <Project
            title="Swintons Predictions League"
            text="This is a project started as a family where we try to predict which teams win in the premier league and complete to get the most predictions correct, the site has been built with .NET Core and is being converted to a React App. 
            Feel free to view a Demo version of the application as the live version can only be acessed by active users"
            date="January 2021"
            url="https://cswinton-beta.000webhostapp.com/"
            id="PL"
            image={require("./projects/pl.png")}
            alt="Swintons Predictions League"
          />
        </ProjectGroup>
      </Year>
)

export default TwentyTwentyOne

const Section = styled.section`
  border-bottom: 1px solid #eee;
  padding: 10px 0px;
`
const Title = styled.h2``
const Year = styled.div``

const ProjectGroup = styled.div`
  justify-items: center;
`
