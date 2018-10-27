import * as React from "react";

class AddPostForm extends React.Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.refs);
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Title: </label>
                    <input name="title" type="text" ref="titleInput"/>
                </div>
                <div>
                    <label>Body: </label>
                    <textarea name="body" ref="bodyTextArea"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AddPostForm;