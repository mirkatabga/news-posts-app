import { ADD_POST, FETCH_POSTS } from "../actions/types"

const initialState = {
    posts: [],
    post: {},
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                post: action.payload
            }
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
}

export default postReducer;