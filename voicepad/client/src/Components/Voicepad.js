import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom';

class Voicepad extends Component {
    render(){
        return (
            <main>
                <Navbar/>
                <h1>chim</h1>
                <div id="openModal" className="modalDialog">
	                <div>
		                <a href="#close" title="Close" className="close">X</a>
		                <h2>New Folder</h2>
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