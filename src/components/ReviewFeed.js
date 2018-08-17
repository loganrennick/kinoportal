import React, { Component } from 'react';
import ReviewCard from './reviewcard';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Navbar from './navbar.js';
import Footer from './footer';

const options = ['Newest Review','Oldest Review','Highest Rated','Lowest Rated','Newest Release','Oldest Release', 'Alphabetical (A>Z)','Alphabetical (Z>A)'];

const params = {
  "Newest Review": "-postDate",
  "Oldest Review" : "postDate",
  "Highest Rated" : "-rating",
  "Lowest Rated" : "rating",
  "Newest Release" : "-releaseYear",
  "Oldest Release" : "releaseYear",
  "Alphabetical (A>Z)" : "title",
  "Alphabetical (Z>A)" : "-title" 
};

export default class ReviewFeed extends Component {
  
  constructor (props) {
      super(props);
      this.state = {
        query: props.match.params.query,
        rc: [],
        previous: "", 
        next: "",
        selected: options[0],
      };
      this._onSelect = this._onSelect.bind(this);
      this.handleQueryChange = this.handleQueryChange.bind(this);
      this.getReviews = this.getReviews.bind(this);
      this.clearQuery = this.clearQuery.bind(this);
  }

  _onSelect (option) {
      this.setState({selected: option.value});
      this.getReviews(option.value);
  }

  handleQueryChange(search) {
    this.getSearch(search);
  } 

  clearQuery() {
    this.setState({query: ""});
  }

  async getSearch(search) {
    try {
        this.setState({query: search});
        const res = await fetch('http://127.0.0.1:8000/api/rc?search=' + search);
        const data = await res.json();
        this.setState({
          rc: data.results, previous: data.previous, next:data.next
        });
    } catch (error) {
      console.error(error);
    }
  }
  
  async getReviews(sort) {
    try {
        let response = await fetch(
          'http://127.0.0.1:8000/api/rc?ordering=' + params[sort]
        );
        let data = await response.json();
        this.setState({
          rc : data.results, previous: data.previous, next:data.next
        });
      }
     catch (error) {
      console.error(error);
    }
  }

  async componentDidMount() {
    try {
      if (this.state.query) {
        const res = await fetch('http://127.0.0.1:8000/api/rc?search=' + this.state.query);
        const data = await res.json();
        this.setState({
          rc : data.results, previous: data.previous, next:data.next
        });
      }
      else {
        const res = await fetch('http://127.0.0.1:8000/api/rc');
        const data = await res.json();
        this.setState({
          rc : data.results, previous: data.previous, next:data.next
        });
      }
    } catch (e) {
      console.log(e);
    }
  }



  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    var val = date.split("-");
    return monthNames[parseInt(val[1]) - 1] + " " + val[2] + ", " + val[0];
  }

  render() {
    const hide = this.state.query ? {display:'none'} : {};
    const nohide = this.state.query ? {} : {display:'none'};
    return (
      <div>
      <Navbar handleQueryChange={this.handleQueryChange} clearQuery={this.clearQuery}/>
      <main role="main">
        <section>
          <div className="container mt-3 mb-3 d-flex">
            <h3 style = {hide} className="highlight mr-auto">Reviews</h3>
            <h3 style = {nohide} className="highlight mr-auto">Results for: '{this.state.query}'</h3>
            <div style = {hide}>
            <h5 className="float-left highlight mt-2 mr-2">Sort</h5>
            <div className="dropdown float-right">
              <Dropdown options={options} onChange={this._onSelect} value={this.state.selected} />
            </div>
            </div>
          </div>
        </section>
        <div className="album bg-light">
          <div className="container">
            <div className="row">
            {this.state.rc.map(item =>(
              <ReviewCard key = {item.id} id = {item.id} title = {item.title} postDate = {this.formatDate(item.postDate)} releaseYear = {item.releaseYear} rating = {item.rating} thumbnail = {item.thumbnail} />
            ))}
            </div>
          </div>
        </div>
        </main>
        <Footer />
      </div>
    );
  }
}


