import React from "react";
// import image/gif for 404
function Error404(props){
    return(
        <div>
            {
                props.res.statusCode === 404 ? 
                    (<div><img src={} alt="404"/>
                        <p>Sorry you have done something you weren't to do</p>
                    </div>)
                     : 
                    null
            }
                {/* if (res.statusCode === 404){
                    <img src={} alt="404"/>
                    <p>Sorry you have done something you weren't to do</p>
                }else{
                   return null
                } */}
            
            
        </div>
    );
}

export default Error404;