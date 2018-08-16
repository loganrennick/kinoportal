import React, { Component } from 'react';

export default class ReviewTitle extends Component {
    render() {
        return (  
            <section>
                    <div className="container mt-3 mb-3 d-flex">
                        <h3 className="highlight">{this.props.title}</h3>
                        <h6 className="text-muted ml-3 mt-2 mb-1">{this.props.releaseYear}</h6>
                    </div>
            </section>
        )
    }
}