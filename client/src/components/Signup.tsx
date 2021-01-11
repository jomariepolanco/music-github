import React, { ChangeEvent, Component } from 'react'

interface Props {
    signupHandler: (userObj: {username: string, password: string, name: string;}) => void;
}

class Signup extends Component<Props>{

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
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="name" placeholder="name" onChange={this.changeHandler}/>
                    <input type="text" name="username" placeholder="username" onChange={this.changeHandler}/>
                    <input type="password" name="password" placeholder="password" onChange={this.changeHandler}/>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup;