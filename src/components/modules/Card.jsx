import React from 'react'

const Cards = props => (
    <Card>
        <img src={props.image} />
        <Title>{props.title}</Title>
        <Context>{props.text}</Context>
    </Card>
)

export default Cards

const Card = styled.div`

    max-width: 300px;
    height: 225px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.25);
    display: grid;
    grid-template-rows: 1fr 1fr;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    cursor: pointer;

    :hover{
        transform: scale(1.1, 1.1);
        box-shadow: 0 30px 60px rgba(0,0,0,0.5);
    }

    :hover img{
        transform: translateY(-20px);
    }

    img{
        position: absolute;
        top: 0;
        height: 110%;
        z-index: -1;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

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
`

const Title = styled.h3`
    color: white;
    font-size: 30px;
    margin: 20px 0 0 20px;
    width: 190px;
`
const Context = styled.p`
    color: rgba(255,255,255,0.8);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    align-self: end;
    margin: 0 0 20px 20px;
`
