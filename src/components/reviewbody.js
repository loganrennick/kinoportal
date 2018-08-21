import React, { Component } from 'react';

export default class ReviewBody extends Component {

    generateStars() {
        const star = <i className="fas fa-star"></i>;
        const halfstar = <i className="fas fa-star-half"></i>;
        var rating = parseInt(this.props.rating,10);
        var torender = [];
        var starcount;
        if (rating % 2 === 0) {
            starcount = rating / 2;
            for (var i = 0; i < starcount; i++) {
                torender.push(star);
            }
        }
        else {
            starcount = Math.floor(rating / 2);
            for (i = 0; i < starcount; i++) {
                torender.push(star);
            }
            torender.push(halfstar);
        }
        return torender.map((i,index) => <span key={index}>{i}</span>);
    }

    render() {
        return (  
            <div className="col-9 shadow-sm">
                            <img src= {this.props.thumbnail} className="img-fluid mt-3 mb-3" alt={`${this.props.title} screencap`}/>
                            <div className="d-flex mb-2 justify-content-between align-items-center">
                                <div>
                                    {this.generateStars()}
                                </div>
                                <small className="text-muted">{this.props.postDate}</small>
                            </div>
                            <div>
                                    {this.props.entry.split('\n').map((i,index) => <p key = {index}>{i}</p>)}  
                            </div>
                        </div>
        )
    }
}