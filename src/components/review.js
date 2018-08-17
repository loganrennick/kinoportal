import React, { Component } from 'react';
import ReviewBody from './reviewbody';
import ReviewTitle from './reviewtitle';
import ReviewSidebar from './reviewsidebar';
import {api_stor} from '../config.js';
import Navbar from './navbar.js';
import Footer from './footer';

export default class Review extends Component {
    constructor (props) {
        super(props)
        this.state = {
          id: props.match.params.id,
          title: props.match.params.title,
          rc: [],
          r: [],
          md : []
        }
    }

    async getReviewCard() {
        try {
          let response = await fetch(
            'http://127.0.0.1:8000/api/rc/' + this.state.id
          );
          let data = await response.json();
          this.setState({
            rc : [data]
          });
        } catch (error) {
          console.error(error);
        }
    }

    async getReview() {
        try {
          let response = await fetch(
            'http://127.0.0.1:8000/api/r/' + this.state.id
          );
          let r = await response.json();
          let data = this.state.rc;
          data[0].entry = r.entry;
          this.setState({
            r : data
          });
        } catch (error) {
          console.error(error);
        }
    }  

    async getMovieInfo() {
        try {
            const title = this.state.title.replace(/\s/g, "+");
            let response = await fetch(
              'https://www.omdbapi.com/?t=' + title + '&apikey=' + api_stor.key
            );
            let data = await response.json();
            this.setState({
                md : [data]
            });
          } catch (error) {
            console.error(error);
          }
    }

    async componentDidMount() {
        this.getReviewCard();
        this.getReview();
        this.getMovieInfo();
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
            <main role="main">
            <Navbar />
                {this.state.rc.map(item =>(
                        <ReviewTitle key = {item.id} title = {item.title} releaseYear = {item.releaseYear} />
                        ))}
                <div className="bg-light">
                <div className="bg-white container">
                    <div className="row">
                        {this.state.r.map(item =>(
                        <ReviewBody key = {item.id} id = {item.id} title = {item.title} postDate = {this.formatDate(item.postDate)} releaseYear = {item.releaseYear} rating = {item.rating} thumbnail = {item.thumbnail} entry = {item.entry}/>
                        ))}
                        {this.state.md.map(item =>(
                        <ReviewSidebar key = {this.state.id} title = {item.Title} runtime = {item.Runtime} year = {item.Year} writer = {item.Writer} poster = {item.Poster} language = {item.Language} genre = {item.Genre} director = {item.Director} cast = {item.Actors} country = {item.Country}/>
                        ))}
                    </div>
                </div>
                </div>     
                <Footer />  
                </main>
        )
    }
}