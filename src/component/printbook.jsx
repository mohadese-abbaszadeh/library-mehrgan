import React from 'react';
import "./printbook.css";

export class Printbook extends React.Component{
    render(){
        return(
            <div className="">
                <div className="container">
                    <h3 className="printh3">⏰ انتظار برای چاپ شدن کتاب ها و آماده شدن پادکست ها⏰</h3>
                    <div className="bar">
                        <svg>
                            <circle cx='50%' cy='50%' r="50%"></circle>
                        </svg>
                        <h1 className="h1">کتاب چشمه <br /> 90% </h1>
                    </div>
                    <div className="bar">
                        <svg>
                            <circle cx='50%' cy='50%' r="50%"></circle>
                        </svg>
                        <h1 className="h1">کتاب ناوبران <br /> 90% </h1>
                    </div>
                    <div className="bar">
                        <svg>
                            <circle cx='50%' cy='50%' r="50%"></circle>
                        </svg>
                        <h1 className="h1">پادکست مهتاب <br /> 100% </h1>
                    </div>
                </div>

                

                

            </div>
        );
    }
}