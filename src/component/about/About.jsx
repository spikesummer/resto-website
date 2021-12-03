import React from "react";
import { ButtonOrderNow } from "../buttonOrderNow/ButtonOrderNow";
import { Heading } from "../heading/Heading";
import { SubHeading } from "../subHeading/SubHeading";
import { Container, Content, IconsContainer, Image } from "./AboutStyle";


export const About = () => {
    
    const buttonAbout = [
        {
            icon: "fas fa-shipping-fast",
            title: "free delivery"
        },
        {
            icon: "fas fa-dollar-sign",
            title: "easy payments"
        },
        {
            icon: "fas fa-headset",
            title: "24/7 service"
        },
    ]

    return(
        <section className="about" id="about">
            <SubHeading text="about us"/>
            <Heading text="why choose us?"/>
            <Container>
                <Image>
                    <img src="img/about-img.png" alt=""/>
                </Image>
                <Content>
                    <h3>best food in the country</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>
                    <IconsContainer>
                        {buttonAbout.map((item, index) => {
                            return(
                                <div key={index} className="icons">
                                    <i className={item.icon}></i>
                                    <span>{item.title}</span>
                                </div>
                            )
                        })}
                    </IconsContainer>
                    <ButtonOrderNow text="learn more"/>
                </Content>
            </Container>
        </section>
    )
}