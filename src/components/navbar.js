import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (  
            <header>
                <div className="navbar shadow-sm">
                    <a href="#" className="navbar-brand mr-auto">
                    <h1><strong>KinoPortal</strong></h1>
                    </a>
                    <form className="form-inline mt-20 mt-md-0">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary ico-button" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                    </div>
                    </form>
                </div>
            </header>
        )
    }
}