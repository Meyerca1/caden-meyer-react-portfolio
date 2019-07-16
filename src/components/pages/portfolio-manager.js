import React, { Component } from 'react'
import axios from 'axios';

export default class PortfolioManager extends Component {
    constructor (){
        super();

        this.state={}
    }

    updatePortfolioItems(){
        return axios.get("https://cadenmeyer.devcamp.space/portfolio/portfolio_items")
        .then(response => {
        this.setState({
            data: response.data.portfolio_items
        });
    }).catch(error => {
        console.log(error);
    });
    }


    render() {
        return (
            <div className = "portfolio-manager-wrapper">
                <div className="left-column">
                    <h1>Portfolio form...</h1> 
                </div>
                <div className="right-column">
                    <h1>Portfolio Sidebar</h1>  
                    {this.data}   
                </div>

            </div>
        );
    }
}
