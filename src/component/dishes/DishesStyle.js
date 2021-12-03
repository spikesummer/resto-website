import styled from "styled-components";

const green = "#27ae60";
const black = "#192a56";
const boxShadown = "0 .5rem 1.5rem rgba(0,0,0,.1)";

export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    gap:1.5rem;
`;

export const Box = styled.div`
    padding:2.5rem;
    background:#fff;
    border-radius: .5rem;
    border:.1rem solid rgba(0,0,0,.2);
    box-shadow: ${boxShadown};
    position: relative;
    overflow: hidden;
    text-align: center;

    :hover .fa-heart{
        right:1.5rem;
    }

    :hover .fa-eye{
        left:1.5rem;
    }

    & .fa-heart, & .fa-eye{
        position: absolute;
        top:1.5rem;
        background:#eee;
        border-radius: 50%;
        height: 5rem;
        width:5rem;
        line-height: 5rem;
        font-size: 2rem;
        color: ${black};
    }  
    
    & .fa-heart{
        right:-15rem;
    }

    & .fa-eye{
        left:-15rem;
    }

    & .fa-heart:hover, & .fa-eye:hover{
        background: ${green};
        color:#fff;
    }

    img{
        height:17rem;
        margin:1rem 0;

        @media (max-width:450px){
            height:auto;
            width: 100%;
        }
    }

    h3{
        color: ${black};
        font-size: 2.5rem;
    }

    & .stars{
        padding:1rem 0;
        
        i{
            font-size: 1.7rem;
            color: ${green};
        }
    }

    span{
        color: ${green};
        font-weight: bolder;
        margin-right: 0.4rem;
        font-size: 2.5rem;
    }

`;