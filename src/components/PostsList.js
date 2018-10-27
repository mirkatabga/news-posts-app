import * as React from "react";

class PostsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            this.setState({
                ...this.state,
                posts: posts,
            })
        });
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => {
                    return (
                        <div>
                            <h2>{post.title}</h2>
                            <br />
                            <p>{post.body}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PostsList;