
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
import { addUsertoLocalStorage, getUserFromLocalStorage } from './localStorageUtils';



export default class App extends Component {

  state = { 
    user: getUserFromLocalStorage()
  }

  handleUserChange = (user) => { 
    this.setState({ user })
    addUsertoLocalStorage(user);

  }
  render() {
  
   const { user } = this.state;
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
                          render={(routerProps) => (
                          <SignUp
                           {...routerProps} 
                          handleUserChange={this.handleUserChange}/>)} 
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
