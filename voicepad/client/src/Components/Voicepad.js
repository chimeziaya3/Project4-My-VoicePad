import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Folderlist from './Folderlist';
import AddFolderFrom from './AddFolderForm';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom';

class Voicepad extends Component {
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

    handleFolderEdit() {

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
                <Navbar/>
                <Folderlist 
                    folders={this.state.folders} 
                    notes={this.state.notes}

                    handleFolderDelete={this.handleFolderDelete}
                />
                <AddFolderFrom 
                    handleFolderCreate={this.handleFolderCreate}
                     
                    handleInputFoldernameChange={this.handleInputFoldernameChange}

                    inputFoldernameValue={this.state.inputFoldernameValue} 
                />
                <Footer/>
            </main>
        )
    }
}

export default Voicepad;