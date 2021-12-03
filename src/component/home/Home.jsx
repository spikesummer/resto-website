import React from "react";
import { ButtonOrderNow } from '../buttonOrderNow/ButtonOrderNow'
import { Slide, Content, Image, Page } from "./HomeStyle";

// import Swiper JS
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
// import Swiper styles
import 'swiper/swiper.min.css';

export const Home = () => {

    const swiper = new Swiper('.home-slider', {
        modules: [Navigation, Pagination, Scrollbar],
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop:true,
      });
    

    return(
        <section className="home" id="home">

            <div className="swiper-container home-slider">

                <div className="swiper-wrapper wrapper">

                    
                    <Slide className="swiper-slide">
                        <Content>
                            <span>our special dish</span>
                            <h3>spicy noodles</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                            <ButtonOrderNow text="order now"/>
                        </Content>
                        <Image>
                            <img src="img/home-img-1.png" alt=""/>
                        </Image>
                    </Slide>
                    
                    <Slide className="swiper-slide">
                        <Content>
                            <span>our special dish</span>
                            <h3>fried chicken</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                            <ButtonOrderNow text="order now"/>
                        </Content>

                        <Image>
                            <img src="img/home-img-2.png" alt=""/>
                        </Image>
                    </Slide>

                    <Slide className="swiper-slide">
                        <Content>
                            <span>our special dish</span>
                            <h3>hot pizza</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                            <ButtonOrderNow text="order now"/>
                        </Content>
                        <Image>
                            <img src="img/home-img-3.png" alt=""/>
                        </Image>
                    </Slide>

                </div>

                <Page className="swiper-pagination"/>

            </div>

        </section>
    )
}