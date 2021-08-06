import React from "react"
import styled from "styled-components"
import Tabs from "../modules/Tabs"
import Project from "../modules/Project"

const Projects = ({ siteTitle }) => (
  <Section id="projects">
    <Title>Projects</Title>
    <Tabs>
      <Year label="2021">
        <ProjectGroup>
          <Project
            title="React Minis"
            text="This is a mini Portfolio that showcases small React Projects that I have worked on"
            date="Updated June 2021"
            link="https://react-minis.netlify.app"
            id="React"
            id2="ReactIcon"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/react.png"}
            alt="React"
            builtwith="Built With"
            tool={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/react.png"}
            toolname="React"
          />
          <Project
            title="UCAS Calculator"
            text="For Leeds Beckett University I created an UCAS points Calculator that allows prospective students to input their grades to determine what UCAS Points they have."
            para2="Developed with React and accessing live data from a UCAS API."
            date="Febuary 2021"
            link="https://www.leedsbeckett.ac.uk/undergraduate/ucas-tariff/"
            id="UCAS"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/ucas-calculator.png"}
            alt="UCAS Calculator"
            builtwith="Built With"
            tool={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/react.png"}
            toolname="React"
          />
        </ProjectGroup>
      </Year>
      <Year label="2020">
        <ProjectGroup>
          <Project
            title="ASSIZT"
            text="ASSIZT is an user personalised portal for Health And Safety Management In The Workplace and is currently in development"
            para2="For this project, I have assisted with CSS for the tool.
            Take a quick preview of the Template that has been created, please bare in mind everything on this page is a work in progress and not final"
            status="Demo Preview"
            date="Q1 2021"
            link="https://cswinton-projects.000webhostapp.com/projects/assizt/"
            id="ASSIZT"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/assizt.svg"}
            alt="ASSIZT"
          />
          <Project
            title="Smart Home Help"
            text="I started Smart Home Help, offering support to
                            people with their technology at home, providing them with
                            solutions to get them up and running with their tech with
                            tailored preferences"
            date="Feburary 2020"
            link="https://www.smart-home-help.co.uk/"
            id="smarthomehelp"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/smarthomehelp.svg"}
            alt="Smart Home Help"
          />
          <Project
            title="Beaverbrooks"
            text="As part of a task for a role, I created a campaign for Gold Jewellery to showcase Beaverbrooks 9ct/ 18ct gold jewellery pieces creating a landing page to inspire and inform customers before they buy highlighting the Beaverbrooks difference – product quality, careful selection, style/ trend-led pieces"
            date="January 2020"
            link="https://cswinton-projects.000webhostapp.com/projects/beaverbrooks/"
            id="Beaverbrooks"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/beaverbrooks.png"}
            alt="Beaverbrooks"
          />
        </ProjectGroup>
      </Year>
      <Year label="2019">
        <ProjectGroup>
          <Project
            title="UCLan Subjects Page"
            text="As part of my work for UCLan I was assigned the task of creating a subject’s page that would allow students to review the subjects that the university have to offer in order to help them decide on what course is best suited to them"
            para2="These pages demonstrate to the user the expertise in the field along with people’s experiences who have studied and academics"
            date="November 2019"
            link="https://xd.adobe.com/view/55c478a8-d319-4703-7058-33a044c5cd27-23f5/?fullscreen"
            id="UCLan"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/uclan.png"}
            alt="UCLan Subjects Page"
          />
          <Project
            title="GMail Alexa Skill"
            text="As part of my Dissertation Project I built an Alexa application that would allow users to have their emails read back to them"
            para2="Click the link in order to find my guide on how I was able to build this Alexa Skill and have a go at building the application yourself"
            date="May 2019"
            link="https://cswinton-projects.000webhostapp.com/projects/alexa/"
            id="GMail"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/gmail.png"}
            alt="GMail Alexa Skill"
          />
          <Project
            title="Eye Sight"
            text="As part of a UX Module, I was tasked with creating an emphatic application using UXD methods to research, design and simulate the application using visual prototyping tools and techniques"
            para2="I decided to build Eye Care, an Application that would allow users to view their prescriptions for their eyes, book appointments with their opticians as well as including tutorials to help users take care of their eyes"
            date="May 2019"
            link="https://xd.adobe.com/embed/3aacf42b-e010-4c13-65a0-3654546607c7-4c9d/?fullscreen"
            id="eyesight"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/eyesight.png"}
            alt="Eye Sight"
          />
          <Project
            title="SCRAN"
            text="As part of an Enterprise Module, me and a group of piers made a new website along with some advertisments for a University Society called SCRAN"
            para2="SCRAN was set up in the summer of 2016 by a group of students at UCLan to provide nutrition and cooking related resources and support for students, both on campus and online"
            date="May 2019"
            link="https://scranpreston.co.uk/"
            id="SCRAN"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/scran.png"}
            alt="SCRAN"
          />
        </ProjectGroup>
      </Year>
      <Year label="2018">
        <ProjectGroup>
          <Project
            title="Student Radar"
            text="As part of an Code Design assignment, I was tasked to build a radar that would show students on the campus, where they are live and also allow you to see who that student is"
            para2="However, without the actual data we have had to replicate it with randomised array, but it works just like it would if we had the real data"
            date="May 2018"
            link="https://cswinton-projects.000webhostapp.com/projects/radar"
            id="Radar"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/radar.svg"}
            alt="Student Radar"
          />
          <Project
            title="UCLan Catering Application"
            text="As part of an Application Design & Delivery assignment I was tasked with a group to develop an UX Prototype for the university's catering department"
            date="January 2018"
            link="https://invis.io/2GF9L1XHQ"
            id="UCLan"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/uclan.png"}
            alt="UCLan Catering Application"
          />
          <Project
            title="R2D2"
            text="As part of an Code Design task, I was tasked to build a R2D2 vector from code using HTML Canvas"
            date="January 2018"
            link="https://cswinton-projects.000webhostapp.com/projects/r2d2"
            id="R2D2"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/r2d2.png"}
            alt="R2D2"
          />
        </ProjectGroup>
      </Year>
      <Year label="Upcoming">
        <ProjectGroup>
          <Project
            title="Swintons Predictions League"
            text="This project is a family project where we try to predict which teams will win fixtures in the premier league and compete to get the most predictions correct"
            para2="Feel free to view a Demo version of the application as the live version can only be accessed by active users"
            date="Summer 2021"
            status="Demo Preview"
            link="https://swintons-pl.netlify.app/"
            id="PL"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/pl.png"}
            alt="Swintons Predictions League"
            builtwith="Built With"
            tool={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/react.png"}
            toolname="React"
          />
          <Project
            title="SolidRoute"
            text="SolidRoute is a bespoke software development company that supplies systems to waste management organisations across the nation. Currently, the website is being scheduled for development soon"
            date="Q3 2021"
            status="In Development"
            link=""
            id="SolidRoute"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/website.png"}
            alt="SolidRoute"
            builtwith="Built With"
            tool={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/react.png"}
            toolname="React"
          />
          <Project
            title="PS5 UI"
            text="Being a massive fan of Sony & Playstation I decided to create a webpage that you can use the PS5s UI on."
            para2="As this is in early development currently no preview is avaliable"
            date="March 2021"
            status="Desktop Only"
            link=""
            id="PS5"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/PS5.svg"}
            alt="PS5"
            builtwith="Built With"
            tool={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/react.png"}
            toolname="React"
          />
          <Project
            title="Academic Supervisior Search"
            text="This Academic Supervisior Search is where users can search for Academic staff at the university and can find them using this search via the school, subject or name."
            para2="This is a work in progress and you can preview a development version of the tool"
            date="Unknown ETA"
            status="In Development"
            link="https://academic-search-lbu.netlify.app/"
            id="Academic"
            image={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/projects/academic.svg"}
            alt="Academic"
            builtwith="Built With"
            tool={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/react.png"}
            toolname="React"
          />
        </ProjectGroup>
      </Year>
    </Tabs>
  </Section>
)

export default Projects

const Section = styled.section`
  border-bottom: 1px solid #eee;
  padding: 10px 0px;
`
const Title = styled.h2``
const Year = styled.div``

const ProjectGroup = styled.div`
  justify-items: center;
`
