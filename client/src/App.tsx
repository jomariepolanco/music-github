import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Sidebar from './containers/Sidebar';
import Login from './components/Login'
import 'fontsource-roboto'
import Navbar from './components/Navbar';
import BodyContainer from './containers/BodyContainer';
import { Grid, Paper, Theme } from '@material-ui/core';
import {withStyles, createStyles, WithStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import { AppState } from './store/rootStore';
import {AppActions} from './store/models/actions'
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { boundProducers, boundUser } from './store/producer/ProducerAction';
import { Producer } from './store/producer/models/Producer';

const styles = (theme: Theme) => createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })

interface Props extends WithStyles<typeof styles>{}

interface LinkStateProps {
  producers: Producer[];
  producer: Producer | object;
}

interface LinkDispatchProps {
  boundProducers: () => void;
  boundUser: (user: Producer) => void;
}

type LinkProps = LinkStateProps & LinkDispatchProps & Props



class App extends React.Component<LinkProps>{

  componentDidMount(){
    this.props.boundProducers()
  }
  
  handleLogin = (object: {username: string, password: string}) => {
    const user = [...this.props.producers].find(producer => producer.username === object.username && producer.password === object.password)
    if (user){
      this.props.boundUser(user)
    }
  }

  handleSignup = () => {
    console.log('signup')
  }

  
  render(){
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <Switch>
          <Route path='/login' render={() => <Login loginHandler={this.handleLogin} />}/>
        
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper className={classes.paper}> 
                <Navbar />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Sidebar />
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper>
                  <BodyContainer />
              </Paper>
            </Grid>
          </Grid>
          </Switch>
      </div>
    );

  }
}

const msp = (state: AppState): LinkStateProps => ({
  producers: state.producerReducer.producers,
  producer: state.setUserReducer.producer
})

const mdp = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
  boundProducers: bindActionCreators(boundProducers, dispatch),
  boundUser: bindActionCreators(boundUser, dispatch)
})


export default withStyles(styles, {withTheme: true})(connect(msp, mdp)(App));
