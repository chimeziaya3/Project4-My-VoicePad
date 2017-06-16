import React, { Component} from 'react'

class Folderlist extends Component {
    render() {
        return (
            <div>
                {this.state.folder.map((folder) => {
                    {this.state.notes.map((notes) => {
                        
                    })}
                })}
            </div>
        )
    }
}

export default Folderlist;