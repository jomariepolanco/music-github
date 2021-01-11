import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Sidebar from './containers/Sidebar';
import 'fontsource-roboto'
import Navbar from './components/Navbar';
import BodyContainer from './containers/BodyContainer';
import { Grid, makeStyles, createStyles, Paper, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
)


const App: React.FC = () => {

  const handleLogin = () => {
    console.log('login')
  }

  const handleSignup = () => {
    console.log('signup')
  }

  const classes = useStyles()
  return (
    <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper className={classes.paper}> 
              <Navbar handleLogin={handleLogin} handleSignup={handleSignup} />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Sidebar />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper>
              <Switch>
                <Route path='/' render={() => <h1>Welcome</h1>} />
                <Route path='/audios' component={BodyContainer} />
              </Switch>
            </Paper>
          </Grid>
        </Grid>
    </div>
  );
}



export default App;
