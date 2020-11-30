import React from 'react'
import styled from 'styled-components'
import Accordion from './Accordion'
import { Link } from "gatsby"

const Experince = props => (
    <Job>
        <Title>{props.title}</Title>
        <Link href={props.link} target="_blank" rel="noreferrer" aria-label={props.company}>
        <Light src={props.image} alt={props.alt} />
        <Dark src={props.darkimage} alt={props.alt} />
        </Link>
        <Text>{props.text}</Text>
        <Accordion 
        title="Responsibilities"
        content={props.content}
        />
    </Job>
)

export default Experince

const Job = styled.div`
    img{
    height: 75px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    img:hover{
    transform: translateY(-3px);
    }

    @media (prefers-color-scheme: dark){
        .Responsibilities:hover{
            box-shadow: 0 10px 20px rgba(255,255,255,255.25)!important;
        }
    }

    .Responsibilities{
    margin: 8px 0px;
    border: 2px solid;
    border-radius: 20px;
    font-weight: bold;
    padding: 8px 16px;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    background: none;
    font-size: 16px;
  }
  
  .Responsibilities:hover{
    background-color: rgb(51, 51, 51);
    box-shadow: 0 10px 20px rgba(0,0,0,0.25);
    transform: translateY(-3px);
  }
`

const Light = styled.img`
    display: block;

    @media (prefers-color-scheme: dark){
        display: none;
    }
`

const Dark = styled.img`
    display: none;

    @media (prefers-color-scheme: dark){
        display: block;
    }
`

const Title = styled.h3``

const Text = styled.p``