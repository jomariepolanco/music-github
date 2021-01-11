import React, { ChangeEvent, Component } from 'react'

interface Props {
    loginHandler: (userObj: {username: string, password: string}) => void;
}

class Login extends Component<Props>{

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
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler}/>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler}/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;