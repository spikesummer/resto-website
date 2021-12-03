import React from 'react';
import styled from 'styled-components';

const green = "#27ae60";

const ScrollLink = styled.a`
   
        position: fixed;
        top:-120%;
        right:2rem;
        padding:.5rem 1.5rem;
        font-size: 4rem;
        background: ${green};
        color:#fff;
        border-radius: .5rem;
        transition: 1s linear;
        z-index: 1000;

        &.active{
            top:calc(100% - 12rem);
        }
      
`;

export const ScrollTop = (props) => {
 
    return(
        <ScrollLink href="#" className={`${props.active} fas fa-angle-up`} />
    )
}