import React, { Component } from 'react'

class AddFolderForm extends Component {
    render() {
        return (
            <div id="openModal" className="modalDialog">
	                <div>
		                <a href="#close" title="Close" className="close">X</a>
		                <h1>Folder Name</h1>
                        <p>What is your folders name?</p>
		                <form onSubmit={event => this.props.handleFolderCreate(event)}>
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

export default AddFolderForm;