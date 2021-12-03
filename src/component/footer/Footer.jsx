import React from "react";
import { Box, BoxContainer, Credits } from "./FooterStyle";

export const Footer = () => {

    return(
        <section className="footer">

            <BoxContainer>

                <Box>
                    <h3>locations</h3>
                    <a href="home">brasil</a>
                    <a href="home">japan</a>
                    <a href="home">russia</a>
                    <a href="home">USA</a>
                    <a href="home">france</a>
                </Box>

                <Box>
                    <h3>quick links</h3>
                    <a href="#home">home</a>
                    <a href="#dishes">dishes</a>
                    <a href="#about">about</a>
                    <a href="#menu">menu</a>
                    <a href="#review">reivew</a>
                    <a href="#order">order</a>
                </Box>

                <Box>
                    <h3>contact info</h3>
                    <a href="#">+55-13-988812406</a>
                    <a href="#">+55-13-988812406</a>
                    <a href="#">spike.summer82@gmail.com</a>
                    <a href="#">spike.summer@hotmail.com</a>
                    <a href="#">São Paulo, Brasil - 11.449-110</a>
                </Box>

                <Box>
                    <h3>follow us</h3>
                    <a href="#">facebook</a>
                    <a href="#">twitter</a>
                    <a href="#">instagram</a>
                    <a href="#">linkedin</a>
                </Box>

            </BoxContainer>

            <Credits> copyright @ 2021 <span>recreated by Adriano S. Costa</span></Credits>

        </section>
    )
}