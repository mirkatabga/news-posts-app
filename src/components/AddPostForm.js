import * as React from "react";

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
        this.setState({title: '', body: ''});
    };

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        let {title, body} = this.state;
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

export default AddPostForm;