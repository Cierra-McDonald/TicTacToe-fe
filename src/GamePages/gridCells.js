import React, { Component } from 'react'
import { GridItem } from './gridItem'
import './Grid.css'

export default class GridCells extends Component {

    
    render() {

        const arr = [0 , 1, 2];
        const test = arr.map((item1) => {
            return arr.map((item2) => <GridItem cellId={[item1,item2]} handleBoxClick={this.props.handleBoxClick}
            userXorO={this.props.userXorO[item1][item2]}/>)
        })
        console.log(test);
        return (
            <div className="board-wrapper">
                <div className="game-board">
                    {arr.map((item) => {
                        return <div className="board-row">
                            {test[item]}
                        </div>})}
                </div>  
            </div>
        )
    }
}
