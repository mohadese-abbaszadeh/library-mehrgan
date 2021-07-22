import React from 'react';
import "./brand.css";

export class Brand extends React.Component{
    render(){
        return(
            <div className="">
                <div className="rectangle1">
                <h2 className="titr1">  😃 پر فروش ترین کتاب ها و پادکست های مهرگان 😃</h2>
                </div>
                <button className="btnti">مشاهده لیست کتاب ها</button>
                <button className="btntfi">مشاهده لیست پادکست ها</button>

            </div>

        );
    }
}