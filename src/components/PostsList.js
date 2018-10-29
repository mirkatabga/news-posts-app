import * as React from "react";
import { connect } from "react-redux";
import { fetchPostsActionCreator } from "../actions/postActions";

class PostsList extends React.Component {
    componentWillMount() {
        this.props.fetchPostsActionCreator();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.post && nextProps.post !== {}){
            this.props.posts.unshift(nextProps.post);
        }
    }

    render() {
        return (
            <div>
                {this.props.posts.map(post => {
                    return (
                        <div key={post.id}>
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

const mapStateToProps = state => ({
    posts: state.postReducer.posts,
    post: state.postReducer.post
});

export default connect(mapStateToProps, {fetchPostsActionCreator})(PostsList);