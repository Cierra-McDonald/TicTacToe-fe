import React, { Component } from 'react'
import { NavDrawer } from './NavDrawer.js'

export class Header extends Component {
    render() {
        return (
            <div className="main-header">
                <NavDrawer
                handleLogOut={this.props.handleLogOut}
                redirectHome={this.props.redirectHome}
                redirectToSignUp={this.props.redirectToSignUp}
                />
            </div>
        )
    }
}
