import React, { Component } from 'react'
import Folder from './Folder'

class Folderlist extends Component {
    render() {
        return (
            <div>
                {this.props.folders.map((folders) => {
                    return (
                        
                        <Folder 
                            key={folders.id} 
                            folder={folders} 
                            notes={this.props.notes}

                            handleFolderDelete={this.props.handleFolderDelete}
                            
                            handleFolderEdit={this.props.handleFolderEdit}
                            handleInputFoldernameChange={this.props.handleInputFoldernameChange}
                            inputFoldernameValue={this.props.inputFoldernameValue}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Folderlist;