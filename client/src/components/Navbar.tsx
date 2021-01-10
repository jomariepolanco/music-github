import { AppBar, Toolbar } from '@material-ui/core'
import React, { Component } from 'react'

export default class Navbar extends Component {
    

    render() {
        return (
            <nav>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <h3>Navbar</h3> 
                    </Toolbar>
                </AppBar>
            </nav>
        )
    }
}
