import React from "react";
import styled from "styled-components";

const green = "#27ae60";

const Sub = styled.h3`
    text-align: center;
    color: ${green};
    font-size: 2rem;
    padding-top: 1rem;
`;


export const SubHeading = (props) => {
    return(
        <Sub>{props.text}</Sub>
    )
}