import { Card, CardContent } from '@material-ui/core'
import React, { Component } from 'react'

export default class ContributionCard extends Component {
    render() {
        return (
            <div>
                <Card variant="outlined">
                    <CardContent>
                        contribution card
                    </CardContent>
                </Card>
            </div>
        )
    }
}
