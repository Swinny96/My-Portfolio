import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Certifications = props => (
    <Certification>
        <h3>{props.title}</h3>
        <Link className="Comapny" href={props.link} rel="noreferrer" target="_blank" aria-label={props.company}>
        <img className={props.company} src={props.image} alt={props.company} />
        <p>{props.company}</p> 
        </Link>
        <p>{props.text}</p>
        <Link className="btn" href={props.cert} rel="noreferrer" target="_blank" aria-label={props.company}>
        See Certification
        </Link>
    </Certification>
)

export default Certifications

const Certification = styled.div`
    a.Comapny {
    display: flex;
    text-decoration: none;
    font-weight: bold;
    align-items: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    a.Comapny:hover {
    text-decoration: underline;
    transform: translateY(-3px);
    }

    @media (prefers-color-scheme: dark){
        a.btn:hover{
            box-shadow: 0 10px 20px rgba(255,255,255,255.25)!important;
        }
    }
`