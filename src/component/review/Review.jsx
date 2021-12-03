import React from "react";
import { SubHeading } from '../subHeading/SubHeading';
import { Heading } from '../heading/Heading';
import { Slide, User } from "./ReviewStyle";

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

export const Review = () => {
    const person = [
        {
            image: "img/pic-1.png",
            name: "john deo",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni."
        },
        {
            image: "img/pic-2.png",
            name: "john deo",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni."
        },
        {
            image: "img/pic-3.png",
            name: "john deo",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni."
        },
        {
            image: "img/pic-4.png",
            name: "john deo",
            star: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
            comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni."
        }
    ]

    return(
        <section className="review" id="review">
            <SubHeading text="customer's review"/>
            <Heading text="what they say"/>
    
            <div className="swiper-container review-slider">

                <div className="swiper-wrapper">

                    {person.map((item, index) => {
                        return(
                            <Slide className="swiper-slide" key={index}>
                                <i className="fas fa-quote-right"></i>
                                <User>
                                    <img src={item.image} alt=""/>
                                    <div className="user-info">
                                        <h3>{item.name}</h3>
                                        <Stars stars={item.star}/>
                                    </div>
                                </User>
                                <p>{item.comments}</p>
                            </Slide>
                        )
                        })
                    }
                
                </div>

            </div>
        
        </section>
    )
}