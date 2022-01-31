import React, { useRef, useState } from "react";
import "./index.css"
import Header from "../../components/Header"
import axios from "axios";
import Button from "../../components/Button";
import { toast } from "react-toastify"



function Create(){
    const [loadImage, setLoadImage] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image,setImage] = useState("")
    const file = useRef(null)

    function showSystemFyle() {
       file.current?.click()
    }

    function uploadImage(file) {
        const id = toast.loading("Please wait...")
        setLoadImage(true)
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => {
            axios({method: "POST",url: "https://s1cgefiiaj.execute-api.sa-east-1.amazonaws.com/prod/images",data: {file: reader.result}})
            .then(response => {
                console.log("response",response.data.uploadResult.Location)
                setImage(response.data.uploadResult.Location)
            }).catch(err => {
                console.log("err",err)
                toast.update(id, {render:"All is Bad", type:"error", isLoading:false})
            })
        }
        reader.onerror = error => {
            alert("Error on send image to s3",error)
        }
        setLoadImage(false)
        toast.update(id, {render:"All is Good", type:"success", isLoading:false})
    }


    async function createPost() {
        axios({method: "POST",url: "https://xwty58thd3.execute-api.sa-east-1.amazonaws.com/dev/forum",
            headers: {
                'X-API-key': '3kNK1HiMH41UkI2irIWVB29AkVkWvqcH2hySl1dZ',
                'Accept': 'application/json'
            },
            data: {
                title,
                description,
                image
            }
        }).then(response => {
              console.log(response)
            }).catch(err => {
                console.log("err",err)
            })
    }

    return ( 
        <div className="contentCreate"> 
        <Header />
            <div className="wrapperCreatePost">
               <div className="wrapperHeaderPost">
                   <h2>Create a New Post</h2>
                   <Button className="buttonPost" onClick={createPost}>Create Post</Button>
               </div>
               <div className="wrapperDescriptionPost">
                   <div className="wrapperTitle">
                   <h2 >Title</h2>
                   <input  onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter your file"></input> 
                   </div>
                   
                   <div className="descriptionText"> 
                   <h2 >Description</h2>
                   <textarea onChange={e => setDescription(e.target.value)} type="text" placeholder="Enter your description"></textarea>
                   </div>
                  <div className="uploadPhotos">
                  <Button onClick={showSystemFyle}>
                      Upload File
                  </Button>
                  <input ref={file} type="file" style={{display: "none"}} onChange={(e) => uploadImage(e.target?.files[0])} />
                  </div>
               </div>
             </div>
             {!!image && (
                 <img src={{uri: image}} width={100} height={50} alt="imagen do post"/>

             )}
         </div>
    )
   
}

export default Create