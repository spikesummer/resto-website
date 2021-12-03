import styled from "styled-components";

const green = "#27ae60";
const black = "#192a56";
const lightColor = "#666";
// const boxShadown = "0 .5rem 1.5rem rgba(0,0,0,.1)";

export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap:1.5rem;
`;

export const Box = styled.div`
    h3{
        padding:.5rem 0;
        font-size: 2.5rem;
        color: ${black};
    }

    a{
        display: block;
        padding:.5rem 0;
        font-size: 1.5rem;
        color: ${lightColor};

        :hover{
            color: ${green};
            text-decoration: underline;
        }
    }
`;

export const Credits = styled.div`
    text-align: center;
    border-top: .1rem solid rgba(0,0,0,.1);
    font-size: 2rem;
    color: ${black};
    padding:.5rem;
    padding-top: 1.5rem;
    margin-top: 1.5rem;

    span{
        color: ${green};
    }
`;