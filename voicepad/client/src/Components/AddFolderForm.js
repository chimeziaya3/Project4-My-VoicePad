import React, { Component } from 'react'

class AddFolderForm extends Component {
    render() {
        return (
            <div id="openModal" className="modalDialog">
	                <div>
		                <a href="#close" title="Close" className="close">X</a>
		                
		                <form onSubmit={this.props.handleFolderCreate}>
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