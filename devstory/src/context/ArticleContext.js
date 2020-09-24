import React, {createContext, Component} from "react";

export const ArticleContext = createContext();

class ArticleContextProvider extends Component{
    state = {
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

    render() {
        return(
            <ArticleContext.Provider value={{...this.state}}>
                {this.props.children}
            </ArticleContext.Provider>
        );
    }
}


export default  ArticleContextProvider;