import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Create from "../pages/Create";
import Post from "../pages/Post";




function Rotas () {
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Post/>} />
            <Route exact path="/create" element={<Create/>} />
        </Routes>
        </BrowserRouter>
    )
}


export default Rotas