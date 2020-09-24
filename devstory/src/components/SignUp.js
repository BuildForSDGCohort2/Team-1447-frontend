import React, {Component} from "react";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import SignIn from "./SignIn"
// import hero1 from "../assets/hero1.png";

class SignUp extends Component{
    constructor() {
        super();
        this.state = {
            answer: 'Yes',
            isLogged: false,
            count: 1,
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            userEmail: "",
            phonenumber: "",
            gender: "",
            userName: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLogged: true})
        }, 1500)
    }

    // handleClick = () => {this.setState({count: 1})}
    handleClick() {
        // this.setState({count: 1})
        this.setState((prevState) => {
            return{
                count: prevState.count * 2
            }
        })
    }

    handleChange(event) {
        const {name, value} = event.target;
        // type === "checkbox" ? this.setState({[name]: checked}) :this.setState({[name]: value})
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        // async function postData(url = "", data = {}) {
        //     await const response = await fetch(url, {
        //         method: "POST",
        //         mode: "cors",
        //         headers: {
        //             "Accept": "application/json",
        //             'Content-Type': 'application/json',
        //             // 'Content-Type': 'application/x-www-form-urlencoded',
        //         },
        //         body: data
        //     });
        // }

        // postData( "https://www.apidevstory.herokuapp.com/api/v1/signUp", { answer: 42 })

        // figure out to use POST
        fetch("https://www.apidevstory.herokuapp.com/api/v1/signUp", {
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
            })
        });
    }

    render(){
        // let wordDisplay;
        // this.state.isLogged ? (wordDisplay = 'in') : (wordDisplay = 'out')
        return(
            <div >
                {/* <h1>Is React important? {this.state.answer}</h1>
                <p>You are currently logged {wordDisplay}</p>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click Me to double the number</button>
                <button onClick={this.handleClick1}>Click Me 2 to half the number</button>
                {this.state.isLogged !== false ? <h1>Logged in</h1> : <h1>Log back in</h1>}
                
                <p>{this.state.gender}</p> */}
                <Navbar/>
                <div className="flex-container">
                    <div className="hero1-container">
                        {/* <img className="hero1" src={hero1} alt="lady writing a blog"/> */}
                        {/* <p>Share your story about your journey</p>
                        <p>Begin your journey</p>
                        <p>A good story starts with a letter, let the world find you</p> */}
                        <p className="SignUp-message">This is the first step to writing great stories, remember a g<span className="SignUp-emoji">😊😊</span>d story starts with a character</p>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <p className="SignUp-title">Sign Up</p>
                        <input 
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            required
                            onChange={this.handleChange}
                        />
                        <br/>
                        <input 
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            required
                            onChange={this.handleChange}
                        />  
                        <br/>
                        <input 
                            type="date"
                            name="dateOfBirth"
                            placeholder="Date of Birth"
                            value={this.state.dateOfBirth}
                            required
                            onChange={this.handleChange}
                        />
                        <br/>
                        <input 
                            type="tel"
                            name="phonenumber"
                            placeholder="Phonenumber"
                            value={this.state.phonenumber}
                            required
                            onChange={this.handleChange}
                        />
                        <br/>
                        <input 
                            type="email"
                            name="userEmail"
                            placeholder="Enter Email"
                            value={this.state.userEmail}
                            required
                            onChange={this.handleChange}
                        />
                        <br/>
                        <label>
                            <input 
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            required
                            onChange={this.handleChange}
                        /> Male
                        </label>
                        <br/>
                        <label>
                            <input 
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            required
                            onChange={this.handleChange}
                        /> Female
                        </label>
                        <br/>
                        <button>Submit</button>
                        <p className="lastname">Already have an account? SignIn <Link to="/signin">here</Link></p>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;