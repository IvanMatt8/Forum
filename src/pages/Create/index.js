import React from "react";
import "./index.css"
import Header from "../../components/Header"

function Create(){
    return ( 
        <div className="contentCreate"> 
        <Header />
            <div className="wrapperCreatePost">
               <div className="titlePost">
                   <h2>Create a New Post</h2>
                   <button className="buttonPost">Create Post</button>
               </div>
               <div className="wrapperDescriptionPost">
                   <div className="wrapperTitle">
                   <h2 >Title</h2>
                   <input  type="text" placeholder="Enter your file"></input> 
                   </div>
                   
                   <div className="descriptionText"> 
                   <h2 >Description</h2>
                   <input  type="text" placeholder="Enter your description"></input>
                   </div>
                  <div className="uploadPhotos">
                  <h2>Upload Photo</h2>
                   <button >Click Me For Upload Picture</button>
                  </div>
               </div>
             </div>
         </div>
    )
 
   
}

export default Create