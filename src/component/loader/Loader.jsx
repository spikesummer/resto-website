import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top:0; left:0;
    z-index: 10000;
    background:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height:100%;
    width:100%;

    &.fade-out{
       top:-120%;
    }
`;

export const Loader = (props) => {

    return(
        <Container className={props.fade}>
            <img src="./img/loader.gif" alt=""/>
        </Container>
    )
}