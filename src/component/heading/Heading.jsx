import React from 'react';
import styled from 'styled-components';

const black = "#192a56";

const Container = styled.h1`
    text-align: center;
    color: ${black};
    font-size: 3rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
`;

export const Heading = (props)=>{

    return(
        <Container>
            {props.text}
        </Container>
    );
}