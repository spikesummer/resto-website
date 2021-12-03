import styled from "styled-components";

const green = "#27ae60";
const black = "#192a56";
const lightColor = "#666";
const boxShadown = "0 .5rem 1.5rem rgba(0,0,0,.1)";

export const Slide = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap:2rem; 
    padding-top: 9rem;
`;

export const Content = styled.div`
    flex:1 1 45rem;

    span{
        color: ${green};
        font-size: 2.5rem;
    }

    h3{
        color: ${black};
        font-size: 7rem;
    }

    p{
        color: ${lightColor};
        font-size: 2.2rem;
        padding:.5rem 0;
        line-height: 1.5;
    }
`;

export const Image = styled.div`
    flex:1 1 45rem;

    img{
        width: 100%;
    }
`;

export const Page = styled.div`
    .swiper-pagination-bullet-active{
        background:${green};
    }
`;