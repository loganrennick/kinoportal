import React, { Component } from 'react';

export default class ReviewSidebar extends Component {
    render() {
        return (  
            <div className="col-3 shadow-sm ">
                <img src={this.props.poster} className="img-fluid mt-3" alt={`${this.props.title} poster`}/>
                <h4 className="head">{this.props.title} ({this.props.year})</h4>
                <h5 className="subhead">Director</h5>
                <h6 className="info">{this.props.director}</h6>
                <h5 className="subhead">Writer</h5>
                <h6 className="info">{this.props.writer}</h6>
                <h5 className="subhead">Cast</h5>
                <h6 className="info">{this.props.cast}</h6>
                <h5 className="subhead">Genre</h5>
                <h6 className="info">{this.props.genre}</h6>
                <h5 className="subhead">Runtime</h5>
                <h6 className="info">{this.props.runtime}</h6>
                <h5 className="subhead">Language</h5>
                <h6 className="info">{this.props.language}</h6>
                <h5 className="subhead">Country</h5>
                <h6 className="info">{this.props.country}</h6>
            </div>
        )
    }
}