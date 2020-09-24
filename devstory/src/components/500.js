import React from "react";
// import image/gif for error code 500
function Error500(){
    return(
        res.StatusCode === 404 && <div>
                                    <img src={} alt="500"/> 
                                    <p>Aaaah, What did you think you are doing, don't do that again please</p>
                                </div>
    );
}

export default Error500;