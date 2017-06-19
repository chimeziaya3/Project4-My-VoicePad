import React, { Component} from 'react'
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
                        <span className='folderEditBtn fa fa-pencil-square-o' aria-hidden='true'></span>
                        <span className='folderDeleteBtn fa fa-times' aria-hidden='true' onClick={() => this.props.handleFolderDelete(this.props.folder.id)}></span>
                    </div>
                </div>

                {this.props.notes.map((note,index) => {
                    return (
                        <div key={note.id}>
                            <h6><Link to='/Writing'>{note.title}</Link></h6>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default Folder;