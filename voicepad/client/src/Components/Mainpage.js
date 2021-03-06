import React, { Component } from 'react';
import Nav from './Navbar'
import Footer from './Footer';
import Folderlist from './Folderlist';
import AddFolderForm from './AddFolderForm';


// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom';

class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folders: [],
            notes: [],
            inputFoldernameValue: ''
        }
        this.handleInputFoldernameChange = this.handleInputFoldernameChange.bind(this);
        this.handleFolderCreate = this.handleFolderCreate.bind(this);
        this.fetchAllData = this.fetchAllData.bind(this);
        this.handleFolderDelete = this.handleFolderDelete.bind(this);
        this.handleFolderEdit= this.handleFolderEdit.bind(this);

    }

    componentDidMount() {
        this.fetchAllData();
    }

    fetchAllData() {
        fetch('/folders')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                console.log(json);
                this.setState((prevState) => {
                    return {
                        folders: json.folders_data,
                        notes: json.notes_data
                    }
                });
            });
    }

    handleInputFoldernameChange(event) {
        this.setState({inputFoldernameValue: event.target.value})
    }

    handleFolderCreate(event){
        event.preventDefault();

        fetch('/folders', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          folder: {
        foldername: this.state.inputFoldernameValue,
      }
            }),
        })
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            this.setState({
                folders: json.folders_data,
                inputFoldernameValue: ''
            });
        }).catch(err => console.log(err))
       
    }

    handleFolderEdit(event, id) {
        fetch(`/folders/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          folder: {
        foldername: this.state.inputFoldernameValue,
      }
            }),
        })
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            this.setState({
                folders: json.folders_data,
                inputFoldernameValue: ''
            });
        }).catch(err => console.log(err))
       
    }

    handleFolderDelete(id) {
        fetch(`/folders/${id}`, {
      method: 'DELETE',
        }).then(res => res.json()).then((json) => {
            this.setState({
                folders: json.folders_data,
            });
        }).catch(err => console.log(err));
  
    }

    

    render(){
        return (
            <main>
            <Nav/>
                <div className='middleContainer'>
                <Folderlist 
                    folders={this.state.folders} 
                    notes={this.state.notes}

                    handleFolderDelete={this.handleFolderDelete}
                    handleFolderEdit={this.handleFolderEdit}
                    handleInputFoldernameChange={this.handleInputFoldernameChange}
                    inputFoldernameValue={this.state.inputFoldernameValue}
                    
                />
                <AddFolderForm 
                    handleFolderCreate={this.handleFolderCreate}
                     
                    handleInputFoldernameChange={this.handleInputFoldernameChange}

                    inputFoldernameValue={this.state.inputFoldernameValue} 
                />
                </div>
                <Footer/>
            </main>
        )
    }
}

export default Mainpage;