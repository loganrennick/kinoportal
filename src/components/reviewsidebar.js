import React, { Component } from 'react';

export default class ReviewSidebar extends Component {
    render() {
        return (  
            <div className="col-3 shadow-sm">
                <img src={this.props.poster} className="img-fluid mt-3" alt={`${this.props.title} poster`}/>
                <h4>{this.props.title} ({this.props.year})</h4>
                <h5>Director</h5>
                <h6>{this.props.director}</h6>
                <h5>Writer</h5>
                <h6>{this.props.writer}</h6>
                <h5>Cast</h5>
                <h6>{this.props.cast}</h6>
                <h5>Genre</h5>
                <h6>{this.props.genre}</h6>
                <h5>Runtime</h5>
                <h6>{this.props.runtime}</h6>
                <h5>Language</h5>
                <h6>{this.props.language}</h6>
                <h5>Country</h5>
                <h6>{this.props.country}</h6>
            </div>
        )
    }
}