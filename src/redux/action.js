import axios from "axios"
import { POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "./actionType"

export const getAllPostData = (page) => async(dispatch) => {
    dispatch({type:POST_DATA_REQUEST})
    try {
        const res = await axios(`https://internship-service.onrender.com/videos`,{
            params:{
                page:page,
                limit:9
            }
        })
        dispatch({type:POST_DATA_SUCCESS, payload:res.data.data.posts})
    } catch (error) {
        dispatch({type:POST_DATA_FAILURE})
        console.log(error)
    }
}   