import React from "react";
import { ButtonOrderNow } from '../buttonOrderNow/ButtonOrderNow'
import { SubHeading } from '../subHeading/SubHeading';
import { Heading } from '../heading/Heading';
import { Form, InputBox, InputContainer } from '../order/OrderStyle';

export const Order = () => {

    return(
        <section className="order" id="order">

            <SubHeading text="order now"/>
            <Heading text="free and fast"/>
            
            <Form action="">

                <InputBox>
                    <InputContainer>
                        <span>your name</span>
                        <input type="text" placeholder="enter your name"/>
                    </InputContainer>
                   <InputContainer>
                        <span>your number</span>
                        <input type="number" placeholder="enter your number"/>
                    </InputContainer>
                </InputBox>

                <InputBox>
                    <InputContainer>
                        <span>your order</span>
                        <input type="text" placeholder="enter food name"/>
                    </InputContainer>
                    <InputContainer>
                        <span>additional food</span>
                        <input type="test" placeholder="extra with food"/>
                    </InputContainer>
                </InputBox>
                <InputBox>
                    <InputContainer>
                        <span>how musch</span>
                        <input type="number" placeholder="how many orders"/>
                    </InputContainer>
                    <InputContainer>
                        <span>date and time</span>
                        <input type="datetime-local"/>
                    </InputContainer>
                </InputBox>
                <InputBox>
                    <InputContainer>
                        <span>your address</span>
                        <textarea name="" placeholder="enter your address" id="" cols="30" rows="10"></textarea>
                    </InputContainer>
                    <InputContainer>
                        <span>your message</span>
                        <textarea name="" placeholder="enter your message" id="" cols="30" rows="10"></textarea>
                    </InputContainer>
                </InputBox>
                <ButtonOrderNow text="order now"/>
                
            </Form>

        </section>
    )
}