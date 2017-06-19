import React, { Component} from 'react';
import EditFolderForm from './EditFolderForm';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Folder extends Component {
    render() {
        return(
            <div>
                <div className='folderContainer'>
                    <h4 className='foldername'>{this.props.folder.foldername}</h4>
                    <div className='controlBtnContainer'>
                        <a href='#openModal2'><span className='folderEditBtn fa fa-pencil-square-o' aria-hidden='true'></span></a>
                        <span className='folderDeleteBtn fa fa-times' aria-hidden='true' onClick={() => this.props.handleFolderDelete(this.props.folder.id)}></span>
                    </div>
                </div>
                <EditFolderForm
                    handleFolderEdit={this.props.handleFolderEdit}
                    handleInputFoldernameChange={this.props.handleInputFoldernameChange}
                    inputFoldernameValue={this.props.inputFoldernameValue}

                    folder={this.props.folder}
                />

                
                
            </div>
        )
    }
}

export default Folder;