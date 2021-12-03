import styled from "styled-components";

const green = "#27ae60";
const black = "#192a56";
const lightColor = "#666";
const boxShadown = "0 .5rem 1.5rem rgba(0,0,0,.1)";

export const Form = styled.form`
    max-width:90rem;
    border-radius: .5rem;
    box-shadow: ${boxShadown};
    border:.1rem solid rgba(0,0,0,.2);
    background:#fff;
    padding:1.5rem;
    margin:0 auto;
`;

export const InputBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const InputContainer = styled.div`
    width:49%;
    
    span{
        display:block;
        padding:.5rem 0;
        font-size: 1.5rem;
        color: ${lightColor};
    }

    & input, & textarea{
        background:#eee;
        border-radius: .5rem;
        padding:1rem;
        font-size: 1.6rem;
        color: ${black};
        text-transform: none;
        margin-bottom: 1rem;
        width:100%;
        border:.1rem solid ${lightColor};
    }

    & input:focus, & textarea:focus{
        border:.1rem solid ${green};
    }

    & textarea{
        height:20rem;
        resize: none;
    }

    @media (max-width:450px){
        width:100%;
    }
`;