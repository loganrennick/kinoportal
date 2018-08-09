import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewCard from './components/reviewcard.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
class App extends Component {
  render() {
    return (
      <div>
      <main role="main">
        <Navbar></Navbar>
        <section>
          <div className="container mt-3 mb-3 d-flex">
            <h3 className="highlight mr-auto">Reviews</h3>
            <div className="dropdown float-right">
              <h5 className="float-left highlight mt-2 mr-2">Sort</h5>
              <button className="btn btn-secondary dropdown-toggle ico-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Newest
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Oldest</a>
                <a className="dropdown-item" href="#">Highest Rated</a>
                <a className="dropdown-item" href="#">Lowest Rated</a>
                <a className="dropdown-item" href="#">Release Year</a>
                <a className="dropdown-item" href="#">Alphabetical (A>Z)</a>
                <a className="dropdown-item" href="#">Alphabetical (Z>A)</a>
              </div>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">

            <div className="row">
              <ReviewCard title = "HyperNormalisation" postDate = "August 8, 2018" releaseYear = "2016" rating = "8">
              </ReviewCard>
              <ReviewCard title = "Rope" postDate = "August 8, 2018" releaseYear = "1948" rating = "9">
              </ReviewCard>
              <ReviewCard title = "Stalker" postDate = "August 8, 2018" releaseYear = "1979" rating = "10">
              </ReviewCard>
              <ReviewCard title = "Forrest Gump" postDate = "August 8, 2018" releaseYear = "1994" rating = "3">
              </ReviewCard>
              <ReviewCard title = "Kimi no Na wa." postDate = "August 8, 2018" releaseYear = "2016" rating = "5">
              </ReviewCard>
              <ReviewCard title = "The Act of Killing" postDate = "August 8, 2018" releaseYear = "2012" rating = "8">
              </ReviewCard>
              <ReviewCard title = "Frozen" postDate = "August 8, 2018" releaseYear = "2013" rating = "6">
              </ReviewCard>
              <ReviewCard title = "Mulholland Drive" postDate = "August 8, 2018" releaseYear = "2001" rating = "10">
              </ReviewCard>
              <ReviewCard title = "Blue Valentine" postDate = "August 8, 2018" releaseYear = "2010" rating = "7">
              </ReviewCard>
            </div>
          </div>
        </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
