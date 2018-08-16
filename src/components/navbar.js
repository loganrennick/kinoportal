import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (  
            <header>
                <div className="navbar shadow-sm">
                    <h1><strong><NavLink to='/'>KinoPortal</NavLink></strong></h1>
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