
import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import { Header }  from './AuthPages/Header.js'
import PrivateRoute   from './AuthPages/PrivateRoute.js'
import { Login } from './AuthPages/Login.js';
import { SignUp } from './AuthPages/Signup.js'
import { HomePage } from './GamePages/HomePage.js'



export default class App extends Component {


  render() {
  
   
      return (
          <div>
              <Router>
              <Header/>
                  <Switch>
                      <Route 
                          path="/" 
                          exact
                          render={(routerProps) => <HomePage
                          {...routerProps} />} 
                      />
                      <Route 
                          path="/signup" 
                          exact
                          render={(routerProps) => <SignUp {...routerProps} 
                          handleUserChange={this.handleUserChange}/>} 
                      />
                        <Route 
                          path="/login" 
                          exact
                          render={(routerProps) => <Login {...routerProps}
                          />} 
                      />
                       
                        {/* <PrivateRoute 
                          path="/myfavorites" 
                          exact
                          token={user && user.token}
                          render={(routerProps) => 
                          <ApodsFavoritesPage
                            user={this.state.user}
                            {...routerProps} />} 
                      /> */}
                  </Switch>
              </Router>
          </div>
      )
  }
}
