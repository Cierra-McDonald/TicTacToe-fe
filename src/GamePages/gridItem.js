import React, { Component } from 'react'
import './Grid.css'

export class GridItem extends Component {
    render() {
        return (
            <div>
                <button className="box-buttons" onClick={() => this.props.handleBoxClick(this.props.cellId)}>
                    {this.props.userXorO}
                </button>
                
            </div>
        )
    }
}
