import React from "react";
import { ButtonOrderNow } from "../buttonOrderNow/ButtonOrderNow";
import { Heading } from "../heading/Heading";
import { SubHeading } from "../subHeading/SubHeading";
import { Box, BoxContainer, Content, Image } from "./MenuStyle";

const Stars = (props)=>{
    return(
        <div className="stars">
            {props.stars.map((item, index) => {
                return(<i key={index} className={item}></i>)
                })
            }
        </div>
    );
}

export const Menu = () => {
    const dishes = [
        {
            image: "img/menu-1.jpg",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
            price: "$12.99"
        },
        {
            image: "img/menu-2.jpg",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
            price: "$12.99"
        },
        {
            image: "img/menu-3.jpg",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
            price: "$12.99"
        },
        {
            image: "img/menu-4.jpg",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
            price: "$12.99"
        },
        {
            image: "img/menu-5.jpg",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
            price: "$12.99"
        },
        {
            image: "img/menu-6.jpg",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
            price: "$12.99"
        },
        {
            image: "img/menu-7.jpg",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
            price: "$12.99"
        },
        {
            image: "img/menu-8.jpg",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
            price: "$12.99"
        },
        {
            image: "img/menu-9.jpg",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.",
            price: "$12.99"
        }
    ]

    return(
        <section className="menu" id="menu">
            <SubHeading text="our menu"/>
            <Heading text="today's speciality"/>

            <BoxContainer>
                {dishes.map((item, index) => {
                    return(
                        <Box key={index}>
                            <Image>
                                <img src={item.image} alt=""/>
                                <a href="#" className="fas fa-heart"></a>
                            </Image>
                            <Content>
                                <Stars stars={item.star}/>
                                <h3>{item.title}</h3>
                                <p>{item.details}</p>
                                <ButtonOrderNow text="add to cart"/>
                                <span className="price">{item.price}</span>
                            </Content>
                        </Box>
                    )}   
                )}
            </BoxContainer>

        </section>
    )
}