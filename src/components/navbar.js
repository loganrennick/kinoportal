import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    constructor (props) {
        super(props);
        this.state = {
          query: ""
        };
        this._onSelect = this._onSelect.bind(this);
        this.queryInput = this.queryInput.bind(this);
    }
    _onSelect () {
        this.setState({query: this.search.value});
    }
    queryInput () {
        this._onSelect();
        console.log("query");
        if(this.props.handleQueryChange){
            console.log("input");
            this.props.handleQueryChange(this.state.query);
        }
    }
    handleKeyPress(event) {
        if(event.which === 13 ){
            event.preventDefault();
        }
    }

    clear(){
        if(this.props.clearQuery){
            this.props.clearQuery();
        }
    }

    render() {
        return (  
            <header>
                <div className="navbar shadow-sm">
                    <NavLink onClick={this.clear} to='/'><img alt="KinoPortal" src={require("../img/kinoportal-xsm.png")}/></NavLink>
                    <form onKeyPress={this.handleKeyPress} className="form-inline">
                    <input ref={input => this.search = input}
         onChange={this._onSelect}  type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                    <NavLink to={"/"+this.state.query}><button onClick={this.queryInput} className="btn btn-outline-secondary ico-button" type="button" id="button-addon2"><i className="fas fa-search"></i></button></NavLink>
                    </div>
                    </form>
                </div>
            </header>
        )
    }
}