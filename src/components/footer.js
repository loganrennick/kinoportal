import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
    constructor (props) {
        super(props);
          this.handlePrevious = this.handlePrevious.bind(this);
          this.handleNext = this.handleNext.bind(this);
    }

    removeHeader(prop){
        const limit = /[?]limit=\d[&]/;
        const limit2 = /[?]limit=\d/;
        if(prop) {
            let edit =  prop.replace("http://127.0.0.1:8000/api/rc/","");
            if (limit.test(edit)) {
                return "?" + edit.replace(limit, "");
            } else if (limit2.test(edit)) {
                return edit.replace(limit2, "");
            } else{
                return edit;
            }
          }
    }

    handlePrevious(event){
        event.preventDefault
        if(this.props.handleQueryChange){
            this.props.handleQueryChange(this.removeHeader(this.props.previous));
        }
    }

    handleNext(event){
        event.preventDefault
        if(this.props.handleQueryChange){
            this.props.handleQueryChange(this.removeHeader(this.props.next));
        }
    }

    render() {
        const hidep = this.props.previous ? "" : " disabled";
        const hiden = this.props.next ? "" : " disabled";
        const hidepn = (hidep) ?  "" : "d-none";
        const hide = (!this.props.previous && !this.props.next) ? "d-none" : "";
        return (  
            <footer>
                <div className="container">
                <div>
                <nav aria-label="Review page navigation" className = {hide}>
                    <ul className="pagination">
                        <li className={"page-item" + hidep}><NavLink onClick={this.handlePrevious} className="page-link" to={`/${this.removeHeader(this.props.previous)}`}>Previous</NavLink></li>
                        <li className={"page-item" + hiden}><NavLink onClick={this.handleNext} className="page-link" to={`/${this.removeHeader(this.props.next)}`}>Next</NavLink></li>
                    </ul>
                </nav>
                </div>
                <p className="float-right">
                    <a href="#">Back to top</a>
                </p>
                </div>
            </footer>
        )
    }
}