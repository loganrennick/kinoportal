import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (  
            <footer>
                <div className="container">
                <div className="span6 offset6 d-flex align-items-center">
                <nav aria-label="Review page navigation">
                    <ul className="pagination">
                        <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
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