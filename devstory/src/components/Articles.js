import React from "react";
import UserNavbar from "./UserNavbar";
import { Link, useRouteMatch, useParams, Switch, Route } from "react-router-dom";

class Articles extends React.Component{
    constructor() {
      super() 
      this.state = { 
          sendData:{
            articleHeader: "",
            articleBody: "",
          },
          receiveData:{
            status: "success",  
            data:[
                    {
                        articleHeader: "Yahoo boy",
                        articleBody: "Okay all yahoo boys are not all bad",
                    }
                ],
            message: "Something went wrong"
        },
          error:"",
          firstArticle: false,
      } 
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        // fetch all the article for this user id
        fetch("https://www.apidevstory.herokuapp.com/api/v1/feed")
        .then( res => res.json())
        .then( data => {
            this.setState( prevState => {
                return {
                  responseData: {
                      ...prevState.receiveData,
                      response: data
                  }
              }
              });
        })
        .catch(error => {
            this.setState({error: "Something out of our control just happened"})
        })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState( prevState => {
            return {
                sendData: {
                    ...prevState.sendData,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch("https://www.apidevstory.herokuapp.com/api/v1/create/article", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(this.state.sendData)
        })
        .then( res => res.json())
        .then( data => {
            this.setState( prevState => {
              return {
                responseData: {
                    ...prevState.receiveData,
                    response: data
                }
            }
            });
        })
        .catch((error) => {
            this.setState({error: "The article couldn't not be posted due to network"})
        })
    }

    render() {
        // const length = this.state.receiveData.data.length;
        let length = 0;
        const response = this.state.receiveData;
        const allArticle = [];
        // let match = useRouteMatch();
        // Check if status is an error
        if (response.status === "error") {
            allArticle.push(
                <div>
                    <p>{response.message}</p>
                </div>
            )
        }
        // check if the length is zero
        else if (response.status === "success") {
            if (length <= 0) {
                allArticle.push(
                    <div className="empty">
                        <p className="empty1">A keyboard <span>⌨</span> is mightier than a sword <span>⚔</span></p>
                        <p className="empty2">You have no article</p>
                    </div>
                )
            } 
        }
        
        
        // if the length is more than zero it will loop
        for (let i = 0; i < length; i++) {
            // check if the status property has a "success" value
            if (response.status === "success") {
                if (length > 0) {
                    allArticle.push(
                        <div>
                            <p>{response.data[i].articleHeader}</p> 
                            <br/>
                            <p>{response.data[i].articleBody}</p>
                        </div>
                    )
                    
                } 
            }
        }
        return(
            <div>
                <UserNavbar/>
                <aside id="sidebar">
                    {/* There will be a search bar above to search for */}
                    {/* feed icon leads to the feeds.js */}
                    {/* profile icon leads to profile.js */}
                    {/* follower  with the count besides it */}
                    {/* following with the count besides it */}
                    {/* your story */}
                    <p>Feeds</p>
                    <p>Followers</p>
                    <p>Following</p>
                    <p>Profile</p>
                </aside>
                <div id="sideruns">
                    <h4>Other stories</h4>
                    <aside>
                        <details>
                            <summary>Unusual siting in the skies</summary>
                            {/* <Link to={`${match.url}/unusual-siting-in-the-skies`}>Movement in the skies in working distance of it</Link> */}
                            <Link to="/unusual-siting-in-the-skies">Movement in the skies in working distance of it</Link>
                        </details>
                    </aside>
                    <aside >
                        <details>
                                <summary>lorem is too common</summary>
                                <a>When lorem is used a puppy dies so the kittens will rule the world</a>
                                <Link to="/lorem is too common">When lorem is used a puppy dies so the kittens will rule the world</Link>
                        </details>
                    </aside>
                </div>
                <form onSubmit={this.handleSubmit} id="ArticleForm">
                    <input 
                        type="text"
                        placeholder="Title"
                        name= "articleHeader"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                        {/* Figure out how to lock down rows and column in textarea i.e expanding in width and height  */}
                    <textarea
                        rows="6"
                        className="textarea"
                        name="articleBody"
                        required 
                        placeholder="Let the world know your STORY"
                        value={this.state.articleBody}
                        onChange={this.handleChange}
                    />
                    <button>Share it</button>
                </form>
                {allArticle}
                {/* <Switch>
                    <Route path={`${match.path}/:articleId`}>
                        <Article articleId={this.state.articleId}/>
                    </Route>
                </Switch> */}
            </div>
        );
    }
}

export default Articles;