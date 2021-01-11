import React, { ChangeEvent, Component } from 'react'
import { AppState } from '../store/rootStore'
import {connect} from 'react-redux'
import { Producer } from '../store/producer/models/Producer'
import {Redirect} from 'react-router-dom'

interface Props {
    loginHandler: (userObj: {username: string, password: string}) => void;
}

interface LinkStateProps {
    producer: Producer | any;
}

type LinkProps = LinkStateProps & Props

class Login extends Component<LinkProps>{

    state = {
        username: "",
        password: ""
    }

    changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e: any) => {
        e.preventDefault()
        this.props.loginHandler(this.state)
    }

    render() {
        return (
            <>
            {this.props.producer.name ? 
                <Redirect to='/'  />
            :
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler}/>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler}/>
                    <button>Login</button>
                </form>
            </div>

            }
            </>
        )
    }
}

const msp = (state: AppState): LinkStateProps => ({
    producer: state.setUserReducer.producer
})

export default connect(msp)(Login);