import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
        <div class="navbar shadow-sm">
            <a href="#" class="navbar-brand mr-auto">
              <h1><strong>KinoPortal</strong></h1>
            </a>
            <form class="form-inline mt-20 mt-md-0">
              <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary ico-button" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
              </div>
            </form>
        </div>
      </header>

      <main role="main">

        <section>
          <div class="container mt-3 mb-3 d-flex">
            <h3 class="highlight mr-auto">Reviews</h3>
            <div class="dropdown float-right">
              <h5 class="float-left highlight mt-2 mr-2">Sort</h5>
              <button class="btn btn-secondary dropdown-toggle ico-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Newest
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Oldest</a>
                <a class="dropdown-item" href="#">Highest Rated</a>
                <a class="dropdown-item" href="#">Lowest Rated</a>
                <a class="dropdown-item" href="#">Release Year</a>
                <a class="dropdown-item" href="#">Alphabetical (A>Z)</a>
                <a class="dropdown-item" href="#">Alphabetical (Z>A)</a>
              </div>
            </div>
          </div>
        </section>

        <div class="album py-5 bg-light">
          <div class="container">

            <div class="row">
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"/>
                  <div class="card-body">
                      <div class="d-flex align-items-center">
                          <p><h5><a href="#">Hypernormalisation</a></h5></p>
                          <small class="text-muted ml-2 mb-4 mt-1">2016</small>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                          <div>
                              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                          </div>
                          <small class="text-muted">August 8, 2018</small>
                      </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"/>
                  <div class="card-body">
                      <div class="d-flex align-items-center">
                          <p><h5><a href="#">Rope</a></h5></p>
                          <small class="text-muted ml-2 mb-4 mt-1">1948</small>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                          <div>
                              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                          </div>
                          <small class="text-muted">August 8, 2018</small>
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                      <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"/>
                      <div class="card-body">
                          <div class="d-flex align-items-center">
                              <p><h5><a href="#">Stalker</a></h5></p>
                              <small class="text-muted ml-2 mb-4 mt-1">1979</small>
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                              <div>
                                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                              </div>
                              <small class="text-muted">August 8, 2018</small>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                      <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"/>
                      <div class="card-body">
                          <div class="d-flex align-items-center">
                              <p><h5><a href="#">The Act of Killing</a></h5></p>
                              <small class="text-muted ml-2 mb-4 mt-1">2012</small>
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                              <div>
                                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                              </div>
                              <small class="text-muted">August 8, 2018</small>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                      <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"/>
                      <div class="card-body">
                          <div class="d-flex align-items-center">
                              <p><h5><a href="#">Forrest Gump</a></h5></p>
                              <small class="text-muted ml-2 mb-4 mt-1">1994</small>
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                              <div>
                                  <i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                              </div>
                              <small class="text-muted">August 8, 2018</small>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                      <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"/>
                      <div class="card-body">
                          <div class="d-flex align-items-center">
                              <p><h5><a href="#">Kimi no Na wa.</a></h5></p>
                              <small class="text-muted ml-2 mb-4 mt-1">2016</small>
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                              <div>
                                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                              </div>
                              <small class="text-muted">August 8, 2018</small>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                      <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"/>
                      <div class="card-body">
                          <div class="d-flex align-items-center">
                              <p><h5><a href="#">Frozen</a></h5></p>
                              <small class="text-muted ml-2 mb-4 mt-1">2013</small>
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                              <div>
                                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                              </div>
                              <small class="text-muted">August 8, 2018</small>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                      <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"/>
                      <div class="card-body">
                          <div class="d-flex align-items-center">
                              <p><h5><a href="#">Mulholland Drive</a></h5></p>
                              <small class="text-muted ml-2 mb-4 mt-1">2001</small>
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                              <div>
                                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                              </div>
                              <small class="text-muted">August 8, 2018</small>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                      <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"/>
                      <div class="card-body">
                          <div class="d-flex align-items-center">
                              <p><h5><a href="#">Blue Valentine</a></h5></p>
                              <small class="text-muted ml-2 mb-4 mt-1">2010</small>
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                              <div>
                                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>
                              </div>
                              <small class="text-muted">August 8, 2018</small>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </main>

      <footer>
        <div class="container">
          <p class="float-right">
            <a href="#">Back to top</a>
          </p>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;
