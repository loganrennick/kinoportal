import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';

export default class Navbar extends Component {
    constructor (props) {
        super(props);
        this.state = {
          query: "",
          redirect: false,
        };
        this._onSelect = this._onSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    _onSelect () {
        this.setState({query: this.search.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        if(this.props.clearQuery){
            this._onSelect();
            console.log("query");
            if(this.props.handleQueryChange){
                console.log("input");
                this.props.handleQueryChange(this.state.query);
            }
        }
        else {
            this.setState({redirect: true});
        }
        
    }

    clear(){
        if(this.props.clearQuery){
            this.props.clearQuery();
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to={"/" + this.state.query} />;
          }
        return (  
            <header>
                <div className="navbar shadow-sm">
                    <NavLink onClick={this.clear} to='/'><img alt="KinoPortal" src={require("../img/kinoportal-xsm.png")}/></NavLink>
                    <form onSubmit={this.handleSubmit} className="form-inline">
                    <input ref={input => this.search = input}
         onChange={this._onSelect}  type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                    <button onClick={this.handleSubmit} className="btn btn-outline-secondary ico-button" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                    </div>
                    </form>
                </div>
            </header>
        )
    }
}