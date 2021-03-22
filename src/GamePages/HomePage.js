import React, { Component } from 'react'
import GridCells from './gridCells'



export class HomePage extends Component {

    state = { 
        userXorO: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],
    }

    handleBoxClick = (cellId) => { 
        console.log(cellId);
        const row = cellId[0];
        const column = cellId[1];
        const array = this.state.userXorO;
        array[row][column] = 'x';
        this.setState({userXorO: array});

    }



    render() {
        return (
            <div>
               <h1 className="tic-tac-toe-header">tic-Tac-toe</h1> 
               <GridCells 
               handleBoxClick={this.handleBoxClick}
               userXorO={this.state.userXorO}/>
            </div>
        )
    }
}


