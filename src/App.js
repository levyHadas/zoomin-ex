import React from 'react'

import { HashRouter, Route, Switch}  from 'react-router-dom'

import AppHeader from './comps/AppHeader.js'
import HomePage from './pages/HomePage.js'
import MoviesPage from './pages/MoviesPage.js'
import MovieDetails from './pages/MovieDetails'

import './assets/main.scss'


const App = () => {
  return ( 
    <HashRouter>  
    <AppHeader/>
    
    <Switch>
      <Route exact path="/" component={MoviesPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/movie" component={MoviesPage} />
      <Route path="/movie/:id" component={MovieDetails} />
    </Switch>
  </HashRouter>
  )
}


export default App


