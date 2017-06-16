import React, { Component} from 'react'
import Folder from './Folder'

class Folderlist extends Component {
    render() {
        return (
            <div>
                {this.props.folders.map((folder) => {
                    {this.props.notes.map((notes) => {
                        <Folder folders={folder} notes={notes}/>
                    })}
                })}
            </div>
        )
    }
}

export default Folderlist;