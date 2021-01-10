import { Card, CardContent } from '@material-ui/core'
import React, { Component } from 'react'

export default class AudioCard extends Component {
    render() {
        return (
            <div>
            <Card variant="outlined">
                <CardContent>
                    audio card
                </CardContent>
            </Card>
            </div>
        )
    }
}
