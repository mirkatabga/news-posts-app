import { FETCH_POSTS, ADD_POST } from "./types";

export function addPostActionCreator(post) {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(post => (
                dispatch({
                    type: ADD_POST,
                    payload: post
                })
            ))
    }
}

export function fetchPostsActionCreator() {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(posts => {
                dispatch({
                    type: FETCH_POSTS,
                    payload: posts
                });
            });
    }
}

