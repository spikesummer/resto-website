import React from 'react';
import styled from 'styled-components';

const green = "#27ae60";
const black = "#192a56";

const Button = styled.button`
    margin-top: 1rem;
    display: inline-block;
    font-size: 1.7rem;
    color:#fff;
    background: ${black};
    border-radius: .5rem;
    cursor: pointer;
    padding:.8rem 3rem;

    &:hover{
    background: ${green};
    letter-spacing: .1rem;
}
`;

export const ButtonOrderNow = (props)=>{

return(
    <Button as="a" href="#">{props.text}</Button>
);
}