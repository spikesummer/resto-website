import React, { useState } from "react";
import { Container, Logo, MenuIcons, Navbar } from "./headerStyle";


export const Header = () => {
    const [activeMenu, setActiveMenu] = useState("fa-bars");
    const [activeNavBar, setActiveNavBar] = useState("");

    window.onscroll = () =>{if(activeMenu !== "fa-bars") troca()}

    function troca( ){
        activeMenu === "fa-bars"?setActiveMenu("fa-times"):setActiveMenu("fa-bars");
        activeMenu === "fa-bars"?setActiveNavBar("active"):setActiveNavBar("");
    }
    return(
       <Container>

            <Logo><i className="fas fa-utensils"></i>resto.</Logo>

            <Navbar className={activeNavBar}>
                <a className="active" href="#home">home</a>
                <a href="#dishes">dishes</a>
                <a href="#about">about</a>
                <a href="#menu">menu</a>
                <a href="#review">review</a>
                <a href="#order">order</a>
            </Navbar>

            <MenuIcons>
                <i onClick={troca} className={`fas ${activeMenu}`} id="menu-bars"></i>
                <i className="fas fa-search" id="search-icon"></i>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-shopping-cart"></a>
            </MenuIcons>

        </Container>
    )
}