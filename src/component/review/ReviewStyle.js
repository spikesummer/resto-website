import styled from "styled-components";

const green = "#27ae60";
const black = "#192a56";
const lightColor = "#666";
const boxShadown = "0 .5rem 1.5rem rgba(0,0,0,.1)";

export const Slide = styled.div`
    padding:2rem;
    box-shadow: ${boxShadown};
    border:.1rem solid rgba(0,0,0,.2);
    border-radius: .5rem;
    position: relative; 
    max-width: 55rem;
    margin-left: 2rem;

    .fa-quote-right{
        position: absolute;
        top:2rem; right:2rem;
        font-size: 6rem;
        color:#ccc;
    }

    p{
        font-size: 1.5rem;
        line-height: 1.8;
        color: ${lightColor};
    }
`;

export const User = styled.div`
    display: flex;
    gap:1.5rem;
    align-items: center;
    padding-bottom: 1.5rem;

    img{
        height: 7rem;
        width: 7rem;
        border-radius: 50%;
        object-fit: cover;
    }

    h3{
        color: ${black};
        font-size: 2rem;
        padding-bottom: .5rem;
    }

    i{
    font-size: 1.3rem;
    color: ${green};
}
`;