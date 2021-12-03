import { createGlobalStyle } from "styled-components";

// const green = "#27ae60";
// const black = "#192a56";
// const lightColor = "#666";
// const boxShadown = "0 .5rem 1.5rem rgba(0,0,0,.1)";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Nunito', sans-serif;
        margin:0; padding:0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none; border:none;
        text-transform: capitalize;
        transition: all .2s linear;
    }

    html{
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-padding-top: 5.5rem;
        scroll-behavior: smooth;

        @media (max-width:991px){
            font-size: 55%;
        }

        @media (max-width:450px){
            font-size: 50%;
        }
    }

    section{
        padding:2rem 9%;
        
        &:nth-child(even){
            background:#eee;
        }
    
        @media (max-width:991px){
            padding:2rem;
        }
    }  
`;