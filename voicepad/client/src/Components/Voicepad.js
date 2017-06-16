import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Folderlist from './Folderlist';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom';

class Voicepad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folder: '',
            notes: ''
        }
    }
    componentDidMount() {
        fetch('/folders')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                console.log(json);
                this.setState({

                    folder: json.folders_data,
                    notes: json.notes_data
                });
            });
    }
    render(){
        return (
            <main>
                <Navbar/>
                <Folderlist/>
                <div id="openModal" className="modalDialog">
	                <div>
		                <a href="#close" title="Close" className="close">X</a>
		                
		                <form>
                            <input
                                name='Name'
                                placeholder='Name'
                                type='text'
                            />
                            <br/>
                            <button>Save</button>
                        </form>
	                </div>
                </div>
                <Footer/>
            </main>
        )
    }
}

export default Voicepad;