import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ReviewCard extends Component {
    
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
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img className="card-img-top" src= {this.props.thumbnail} alt="Card cap" />
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <h5><NavLink to={`/review/${this.props.id}/${this.props.title}`}>{this.props.title}</NavLink></h5>
                            <small className="text-muted ml-2 mb-1">{this.props.releaseYear}</small>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                {this.generateStars()}
                            </div>
                            <small className="text-muted">{this.props.postDate}</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}