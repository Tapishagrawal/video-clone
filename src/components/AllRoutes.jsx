import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SinglePost from "../pages/SinglePost";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/post/:id" element={<SinglePost/>}/>
        </Routes>
    )
}
