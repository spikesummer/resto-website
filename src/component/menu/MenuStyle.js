import styled from "styled-components";

const boxShadown = "0 .5rem 1.5rem rgba(0,0,0,.1)";
const black = "#192a56";
const green = "#27ae60";
const lightColor = "#666";

export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap:1.5rem;
`;

export const Box = styled.div`
    background: #fff;
    border:.1rem solid rgba(0,0,0,.2);
    border-radius: .5rem;
    box-shadow: ${boxShadown};  
`;

export const Image = styled.div`
    height: 25rem;
    width: 100%;
    padding:1.5rem;
    overflow: hidden;
    position: relative;

    img{
        height: 100%;
        width: 100%;
        border-radius: .5rem;
        object-fit: cover;
    }

    .fa-heart{
        position: absolute;
        top:2.5rem; right: 2.5rem;
        height: 5rem;
        width: 5rem;
        line-height: 5rem;
        text-align: center;
        font-size: 2rem;
        background: #fff;
        border-radius: 50%;
        color: ${black};

        &:hover{
            background-color: ${green};
            color:#fff;
        }
    }
`;

export const Content = styled.div`
    padding:2rem;
    padding-top: 0;

    & .stars{
        padding-bottom: 1rem;

        i{
            font-size: 1.7rem;
            color: ${green};
        }
    }

    h3{
        color: ${black};
        font-size: 2.5rem;
    }

    p{
        color: ${lightColor};
        font-size: 1.6rem;
        padding:.5rem 0;
        line-height: 1.5;
    }

    .price{
        color: ${green};
        margin-left: 1rem;
        font-size: 2.5rem;
    }
`;
