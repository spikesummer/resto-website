import styled from "styled-components";

const black = "#192a56";
const lightColor = "#666";
const green = "#27ae60";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:1.5rem;
    align-items: center;
`;

export const Image = styled.div`
    flex:1 1 45rem;

    img{ 
        width: 100%;
    }
`;

export const Content = styled.div`
    flex:1 1 45rem;

    h3{
        color: ${black};
        font-size: 4rem;
        padding:.5rem 0;
    }

    p{
        color: ${lightColor};
        font-size: 1.5rem;
        padding:.5rem 0;
        line-height: 2;
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    gap:1rem;
    flex-wrap: wrap;
    padding:1rem 0;
    margin-top: .5rem;

    .icons{
        background:#eee;
        border-radius: .5rem;
        border:.1rem solid rgba(0,0,0,.2);
        display: flex;
        align-items: center;
        justify-content: center;
        gap:1rem;
        flex:1 1 17rem;
        padding:1.5rem 1rem;
    }

    i{
        font-size: 2.5rem;
        color: ${green};
    }

    span{
        font-size: 1.5rem;
        color: ${black};
    }
`;