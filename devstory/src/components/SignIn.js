import React, {Component} from "react";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import hero3 from "../assets/hero2.png";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class SignIn extends Component{
    constructor(){
        super()
        this.state = {
            loginData: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        // if (e.target.name === "loginDetails") {
        //     this.setState({
        //         loginData: e.target.value,
        //         password: this.state.password
        //     });
        // }else if (e.target.name = "password") {
        //     this.setState({
        //         loginData: this.state.loginData,
        //         password: e.target.value
        //     });
        // }

        // this.setState({
        //     loginData: e.target.value,
        //     password: this.state.password
        // });

        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("https://www.apidevstory.herokuapp.com/api/v1/signIn", {
            method: "POST",
            mode: "cors",
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                ...data.data[0]
            });
            this.checkForSuccess(data)
        }).catch((error) => {
            this.setState({error: "Check your network"});
        })
    }
    
    render(){
       const computedStyle = {
       fontSize: 14,
       color: "red", 
       fontStyle: "italic"
    }

        return(
            <div>
                <Navbar/>
                <div className="flex-con">
                    <div className="SignIn-message">
                        {/* <img src={hero3} alt="Man with laptop holding a big pencil"/> */}
                        <p>Now that you are here, the next step is important because the w<span className="world" role="img">🌍</span>rld awaits your story <Link to="/articles">go to article</Link></p>
                        {/* <p>the world awaits your story </p> */}
                    </div>
                    <form onChange={this.state.handleChange} method="POST">
                        <p className="SignIn-title">Login</p>
                        <input 
                            type="text" 
                            placeholder="Email"
                            name="loginData"
                            value={this.state.loginData}
                            onChange={this.handleChange}
                        />
                        <input 
                            type="password" 
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        {/* <p style={this.state.password.length < 8 || this.state.password.value !== (regex) ? computedStyle: null}>
                            pls put at least 8 alphanumeric letter with an uppercase and lowercase
                        </p>
                        {this.state.password !== (regex) && <p style={computedStyle}>This types of character are not allowed</p>}
                        <p style={this.state.password !== (regex) ? computedStyle: null}>This types of character are not allowed</p> */}
                        <button>submit</button>
                        <p className="lastname">Don't have an account? Signup <Link to="/signup">here</Link></p>
                    </form>
                </div>
                {this.state.status === "success" ? <Redirect to="/login"/> : null}
            </div>
        );
        
    }
}

export default SignIn;