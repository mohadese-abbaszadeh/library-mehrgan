import React from 'react';
import "./menu.css";

export class Menu extends React.Component{
    render(){
        return(
            <div className="">

                

                <div className="navbar">
                    <ul className="menu">
                        <li>
                             <a href="#link1">خانه</a>
                        </li>
                        <li>
                             <a href="#link2">انتشارات</a>
                        </li>
                        <li>
                             <a href="#link3">شعب</a>
                        </li>
                        <li>
                            <a href="#link4">راه های ارتباطی</a>
                        </li>

                        <button className="btn1">ورود</button>
                        <button className="btn2">ثبت نام </button>

                    </ul> 
                    
                </div>

                <div className="rectangle"></div>

                <h1 className="titr">  فروشگاه آنلاین کتاب و پادکست مهرگان 📚</h1>
                    
                <h3 className="subtitr">(: در فروشگاه ما کلی کتاب و پادکست وجود داره که می تونی به صورت آنلاین یا آفلاین مطالعه و گوش کنی :) </h3>
                
            </div>
        );
    }
}