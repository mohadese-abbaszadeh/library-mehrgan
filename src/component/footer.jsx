import React from 'react';
import "./footer.css";

export class Footer extends React.Component{
    render(){
        return(
            <div className="">
                <div className="rectangle3"></div>
                <div className="foot">
                     <p className="">شعبه مرکزی : کرمان بلوار خلیج فارس</p><br />
                     <p className="">شعبه دوم : زرند خیابان فلسطین</p><br />
                     <p className="">شعبه سوم : رفسنجان میدان شهدا </p><br />
                     <p className="">شماره تماس :********034</p><br />
                     <p className="">آدرس ایمیل : mehregan@gmail.com</p><br />
                </div>
                <div className="foot2">
                     <p className="">لینک های مفید</p><br />
                     <a className="">کتاب های پر فروش ایران</a><br /><br />
                     <a className="">کتاب های جذاب برای نوجوان ها </a><br /><br />
                     <a className="">پادکست های آرامش بخش</a><br /><br />
                     <a className="">پادکست های معرف جهان </a><br /><br />
                </div>
                
            </div>
        );
    }
}