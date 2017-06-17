import React, { Component} from 'react'

class Folder extends Component {
    render() {
        return(
            <div>
                <h4>{this.props.folder.foldername}</h4>

                {this.props.notes.map((note) => {
                    return (
                        <div key={note.id}>
                            <h6>{note.content}</h6>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default Folder;