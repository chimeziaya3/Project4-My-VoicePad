import React, { Component} from 'react'

class Folder extends Component {
    render() {
        return(
            <div>
                <h4>{this.props.folder.foldername}</h4>
                <button onClick={() => this.props.handleFolderDelete(this.props.folder.id)}>delete</button>

                {this.props.notes.map((note,index) => {
                    return (
                        <div key={note.id}>
                            <h6 >{note.title}</h6>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default Folder;