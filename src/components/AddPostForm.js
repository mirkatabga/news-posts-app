import * as React from "react";
import { connect } from "react-redux";
import { addPostActionCreator } from "../actions/postActions";

class AddPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            title: '',
            body: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();
        let post = {
            title: this.state.title,
            body: this.state.body,
        };

        this.props.addPostActionCreator(post);
        this.setState({title: '', body: ''});
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        let { title, body } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Title: </label>
                    <input name="title" type="text" value={title} onChange={this.onChange} />
                </div>
                <div>
                    <label>Body: </label>
                    <textarea name="body" value={body} onChange={this.onChange}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapPropsFromState = state => ({
    post: state.post
});

export default connect(mapPropsFromState, { addPostActionCreator})(AddPostForm);