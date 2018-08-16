import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Review from './review';
import ReviewFeed from './ReviewFeed';

const Main = () => (
    <Switch>
      <Route exact path='/' component={ReviewFeed}/>
      <Route path='/review/:id' component={Review}/>
    </Switch>
  )
  
  
  export default Main
  