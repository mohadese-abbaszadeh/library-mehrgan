import React from 'react';
import "./card.css";

export class Card extends React.Component{
    render(){
        return(
            <div className="">
                                


                <h3 className="seection1">⚜ دسته بندی کتاب ها ⚜</h3>
                <div className="cardsbook">
                    <div className="card2">
                        <a href="">کتاب های تاریخی</a>
                    </div>
                    <div className="card2">
                         <a href="#">کتاب های داستانی</a>
                    </div>
                    <div className="card2"> 
                         <a href="">کتاب های درسی</a>
                         
                    </div>
                    <div className="card2">
                        <a href="">کتاب های موفقیت</a>
                         
                    </div>
                    <div className="card2">
                        <a href="">کتاب های مذهبی </a>  

                    </div>

                </div>
                <h3 className="seection2">⚜ دسته بندی پادکست ها ⚜</h3>
                <div className="cardspad">
                    <div className="card1">
                        <a href="">پادکست های فارسی</a>
                    </div>
                    <div className="card1">
                         <a href="#">پادکست های انگلیسی</a>
                    </div>
                    <div className="card1"> 
                         <a href="">پادکست های موفقیت</a>
                         
                    </div>
                    <div className="card1">
                        <a href="">پادکست های داستانی</a>
                         
                    </div>
                    

                </div>

                



            </div>
        );
    }

}