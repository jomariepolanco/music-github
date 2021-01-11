import React, { ChangeEvent, Component } from 'react'
import { AppState } from '../store/rootStore'
import {connect} from 'react-redux'
import { Producer } from '../store/producer/models/Producer'
import {Redirect} from 'react-router-dom'

interface Props {
    signupHandler: (userObj: {username: string, password: string, name: string;}) => void;
}

interface LinkStateProps {
    producer: Producer | any;
}

type LinkProps = LinkStateProps & Props

class Signup extends Component<LinkProps>{

    state = {
        username: "",
        password: "",
        name: ""
    }

    changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e: any) => {
        e.preventDefault()
        this.props.signupHandler(this.state)
    }

    render() {
        return (
            <>
            {this.props.producer.name ? 
                <Redirect to='/' />
            :
                <div>
                    <form onSubmit={this.submitHandler}>
                        <input type="text" name="name" placeholder="name" onChange={this.changeHandler}/>
                        <input type="text" name="username" placeholder="username" onChange={this.changeHandler}/>
                        <input type="password" name="password" placeholder="password" onChange={this.changeHandler}/>
                        <button>Sign Up</button>
                    </form>
                </div>
            
            }
            </>
        )
    }
}

const msp = (state: AppState): LinkStateProps => ({
    producer: state.setNewUserReducer.producer
})

export default connect(msp)(Signup);