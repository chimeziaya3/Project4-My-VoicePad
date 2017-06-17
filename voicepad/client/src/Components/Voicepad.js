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
        foldername: event.target.foldername.value,
            }),
        })
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            if (json.folder_data.id !== undefined) {
                const newFolder = {
                    id: json.folder_data.id,
                    foldername: json.folder_data.foldername,
                }
                this.setState((prevState) => {
                    return {
                        folders: prevState.folders.concat(newFolder),
                    }
                })
            } else {
                console.log('error');
            }
        })
    }

    handleFolderEdit() {

    }

    

    render(){
        return (
            <main>
                <Navbar/>
                <Folderlist folders={this.state.folders} notes={this.state.notes}/>
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