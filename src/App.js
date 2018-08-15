import React, { Component } from 'react';
import './App.css';
import ReviewCard from './components/reviewcard.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

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

class App extends Component {
  
  constructor (props) {
      super(props)
      this.state = {
        rc: [],
        selected: options[0],
      }
      this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
      this.setState({selected: option.value});
      this.getReviews(option.value);
  }
  
  async getReviews(sort) {
    try {
      let response = await fetch(
        'http://127.0.0.1:8000/api/rc?ordering=' + params[sort]
      );
      let rc = await response.json();
      this.setState({
        rc
      });
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/rc');
      const rc = await res.json();
      this.setState({
        rc
      });
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
    return (
      <div>
      <main role="main">
        <Navbar></Navbar>
        <section>
          <div className="container mt-3 mb-3 d-flex">
            <h3 className="highlight mr-auto">Reviews</h3>
            <h5 className="float-left highlight mt-2 mr-2">Sort</h5>
            <div className="dropdown float-right">
              <Dropdown options={options} onChange={this._onSelect} value={this.state.selected} />
            </div>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
            {this.state.rc.map(item =>(
              <ReviewCard key = {item.id} title = {item.title} postDate = {this.formatDate(item.postDate)} releaseYear = {item.releaseYear} rating = {item.rating} thumbnail = {item.thumbnail} />
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

export default App;
