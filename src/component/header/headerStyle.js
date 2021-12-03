import styled from 'styled-components'

const green = "#27ae60";
const black = "#192a56";
const lightColor = "#666";
const boxShadown = "0 .5rem 1.5rem rgba(0,0,0,.1)";


export const Container = styled.header`
    position: fixed;
    top:0; left: 0; right:0;
    background: #fff;
    padding:1rem 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    box-shadow: ${boxShadown};

    @media (max-width:991px){
        padding:1rem 2rem;
    }
`;

export const Logo = styled.a`
    color: ${black};
    font-size: 2.5rem;
    font-weight: bolder;

    i{
        color: ${green};
    }
`;

export const Navbar = styled.div`
    a{
        font-size: 1.7rem;
        border-radius: .5rem;
        padding:.5rem 1.5rem;
        color: ${lightColor};

        &.active, &:hover{
            color:#fff;
            background: ${green};
        }
    }

    @media (max-width:768px){
        position: absolute;
        top:100%; left:0; right:0;
        background:#fff;
        border-top: .1rem solid rgba(0,0,0,.2);
        border-bottom: .1rem solid rgba(0,0,0,.2);
        padding:1rem;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

        &.active{
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        & a{
            display: block;
            padding:1.5rem;
            margin:1rem;
            font-size: 2rem;
            background:#eee;
        }

        #search-form #search-box{
            width:90%;
            margin:0 1rem;
        }
    }

`;

export const MenuIcons = styled.div`
    & i, & a{
        cursor: pointer;
        margin-left: .5rem;
        height:4.5rem;
        line-height: 4.5rem;
        width:4.5rem;
        text-align: center;
        font-size: 1.7rem;
        color: ${black};
        border-radius: 50%;
        background: #eee;
    }

    & i:hover, & a:hover{
        color:#fff;
        background: ${green};
        transform: rotate(360deg);
    }

    & #menu-bars{
        display: none;
    }

    @media (max-width:768px){
        & #menu-bars{
            display: inline-block;
        }
    }
`;