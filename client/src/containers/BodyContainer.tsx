import React, { Component } from 'react'
import ContributionsContainer from './ContributionsContainer'
import AudioContainer from './AudioContainer'
import { createStyles, makeStyles, Paper, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
)

const BodyContainer: React.FC = () => {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.paper}>
                <AudioContainer />
            </Paper>
            <Paper className={classes.paper}>
                <ContributionsContainer />
            </Paper>
        </div>
    )
}

export default BodyContainer;