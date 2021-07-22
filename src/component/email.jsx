import React from 'react';
import "./email.css";

export class Subscribe extends React.Component{
    render(){
        return(
            <div className="">
                <h3 className="emailtitr">شما می توانید با وارد کردن ایمیل خود در بخش زیر از انتشار جدید کتاب ها و پادکست ها با خبر شوید</h3>
                <div className="container4">
                    <div className="front">
                        <p>وارد کردن ایمیل</p>
                    </div>
                    <div className="back">
                        <input type="email" placeholder="ایمیل خود را وارد کنید" />
                        <button onClick="result()">
                            <span className="fas fa-check">تایید</span>
                        </button>
                    </div>

                </div>

                




            </div>
        );
    }
}