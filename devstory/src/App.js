import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Articles from "./components/Articles";
// import Article from "./components/Article";
// import ArticleContextProvider from "./context/ArticleContext";


function App() {
    return(
        <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/articles">
                            <Articles/>
                        </Route>
                        <Route path="/signup">
                            <SignUp/>
                        </Route>
                        <Route path="/signin">
                            <SignIn />
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch> 
                </BrowserRouter>
        </div>
    )
}

export default App;