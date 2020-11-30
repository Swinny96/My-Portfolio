import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import './Skill.css';
import styled from "styled-components";

const Percentage = props => (
    <Skill>
        <CircularProgressbar 
            value={props.percentage} 
            text={
            <Content>
            {props.skill}
            </Content>
            }
        />
    </Skill>
)

/* export default Skill */
export default Percentage

const Skill = styled.div`
    width: 125px;
    display: inline-flex;
    margin: 14px;

    @media (max-width: 400px){
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }
`
const Content = styled.tspan`

`
