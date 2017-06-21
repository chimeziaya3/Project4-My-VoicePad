import React, { Component } from 'react';

class EditFolderForm extends Component {
    render() {
        return (
            <div id="openModal2" className="modalDialog">
	                <div>
		                <a href="#close" title="Close" className="close">X</a>
		                <h1>Edit Folder Name</h1>
                        <p>What will you call your folder now?</p>
		                <form onSubmit={event => this.props.handleFolderEdit(event, this.props.folder.id)}>
                            <input
                                type='text'
                                value={this.props.inputFoldernameValue}
                                name='foldername'
                                placeholder='Name'
                                onChange={this.props.handleInputFoldernameChange}
                            />
                            <br/>
                            <button>Save</button>
                        </form>
	                </div>
                </div>
        )
    }
}

export default EditFolderForm;