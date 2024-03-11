import { POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "./actionType";


const initState = {
    postsData: [],
    isLoading: false,
    isError: false,
    totalPage:0
}
export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case POST_DATA_REQUEST:
            return { ...state, isLoading: true }
        case POST_DATA_SUCCESS:
            return { ...state, isLoading: false, postsData: payload }
        case POST_DATA_FAILURE:
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }
}