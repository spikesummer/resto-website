import React from "react";
import { ButtonOrderNow } from "../buttonOrderNow/ButtonOrderNow";
import { Heading } from "../heading/Heading";
import { SubHeading } from "../subHeading/SubHeading";
import { BoxContainer, Box } from "./DishesStyle";

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

export const Dishes = () => {

    const dishes = [
        {
            image: "img/dish-1.png",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            price: "$15.99"
        },
        {
            image: "img/dish-2.png",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            price: "$15.99"
        },
        {
            image: "img/dish-3.png",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            price: "$15.99"
        },
        {
            image: "img/dish-4.png",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            price: "$15.99"
        },
        {
            image: "img/dish-5.png",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            price: "$15.99"
        },
        {
            image: "img/dish-6.png",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            title: "delicious food",
            price: "$15.99"
        },
    ]
    return(
        <section className="dishes" id="dishes">

            <SubHeading text="our dishes"/>
            <Heading text="popular dishes"/>

            <BoxContainer>
                {dishes.map((item, index) => {
                    return(
                        <Box key={index}>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-eye"></a>
                            <img src={item.image} alt=""/>
                            <h3>{item.title}</h3>
                            <Stars stars={item.star}/>
                            <span>{item.price}</span>
                            <ButtonOrderNow text="add to cart"/>
                        </Box>
                    )
                })}
            </BoxContainer>

        </section>
    )
}