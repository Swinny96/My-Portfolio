import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Project = props => (
  <ProjectObject>
    <ProjectConetents>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Text>{props.para2}</Text>
      <Status>{props.status}</Status>
      <Date>{props.date}</Date>
      <p>{props.builtwith}</p>
      <BuiltWith>
        <ToolName>{props.toolname}</ToolName>
        <Tool width="57px" height="40px" alt={props.toolname} src={props.tool} />
      </BuiltWith>
    </ProjectConetents>
    <Link
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="Project-Card"
      id={props.id}
      aria-label={props.alt}
    >
      <ProjectImage src={props.image} id={props.id2} alt={props.alt} />
      <ProjectAltImage aria-label={props.title} role="img">
        {props.emoji}
      </ProjectAltImage>
    </Link>
  </ProjectObject>
)

export default Project

const ProjectObject = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0px;

  @media (max-width: 700px) {
    flex-direction: column-reverse !important;

    .Project-Card {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  .Project-Card {
    min-width: 50%;
    height: 320px;
    border-radius: 12px;
    border: 6px solid;
    border-color: #555;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    text-decoration: none;
  }

  a .Project-Card {
    cursor: pointer;
  }

  .Project-Card img {
    max-width: 320px;
    border-radius: 6px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .Project-Card:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  }

  @media (prefers-color-scheme: dark) {
    .Project-Card:hover {
      box-shadow: 0 10px 20px rgba(255, 255, 255, 255.25) !important;
    }
  }

  .Project-Card:hover img {
    transform: scale(1.2, 1.2);
  }

  :nth-child(even) {
    flex-direction: row-reverse;
  }
`

const ProjectConetents = styled.div`
  width: 50%;
  margin: 0px 16px;

  @media (max-width: 700px) {
    width: 100% !important;
    margin: 0px !important;
  }
`

const Title = styled.strong`
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`
const Text = styled.p``
const Status = styled.em``
const Date = styled.p``
const ProjectImage = styled.img``
const BuiltWith = styled.div`
  display: inline-flex;
  align-items: center;
`
const ToolName = styled.strong``
const Tool = styled.img`

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
const ProjectAltImage = styled.span`
  font-size: 200px;
`
