import React, { Component } from 'react';

export default class ReviewCard extends Component {
    
    generateStars() {
        const star = <i class="fas fa-star"></i>;
        const halfstar = <i class="fas fa-star-half"></i>;
        var rating = parseInt(this.props.rating);
        var torender = [];
        if (rating % 2 === 0) {
            var starcount = rating / 2;
            for (var i = 0; i < starcount; i++) {
                torender.push(star);
            }
        }
        else {
            var starcount = Math.floor(rating / 2);
            for (i = 0; i < starcount; i++) {
                torender.push(star);
            }
            console.log("star/2");
            torender.push(halfstar);
        }
        return torender;
    }
    
    render() {
        return (  
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"/>
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <p><h5><a href="#">{this.props.title}</a></h5></p>
                            <small className="text-muted ml-2 mb-4 mt-1">{this.props.releaseYear}</small>
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