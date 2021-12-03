import React, { useState } from "react";
import { GlobalStyle } from "../GlobalStyled";
import { Header } from "../component/header/Header";
import { Home } from "../component/home/Home";
import { Dishes } from "../component/dishes/Dishes";
import { About } from "../component/about/About";
import { Menu } from "../component/menu/Menu";
import { Review } from "../component/review/Review";
import { Order } from "../component/order/Order";
import { Footer } from "../component/footer/Footer";
import { ScrollTop } from "../component/scrollTop/ScrollTop";
import { Loader } from "../component/loader/Loader";

export const App = () => {

    const [mudaActive, setMudaActive] = useState("");
    const [loadOut, setloadOut] = useState("");

    window.onload = () => fadeOut();
    window.onscroll = () => {
        window.scrollY > 60?setMudaActive("active"):setMudaActive("")
        }

    function fadeOut(){
        setInterval(()=>setloadOut("fade-out"), 3000);
    }
    
    return(
        <>
            <GlobalStyle/>
            <Header/>
            {/* <FormSearch/> */}
            <Home/>
            <Dishes/>
            <About/>
            <Menu/>
            <Review/>
            <Order/>
            <Footer/>
            <ScrollTop active={mudaActive}/>
            <Loader fade={loadOut}/>
        </>
    )
}