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
                <Footer/>
            </main>
        )
    }
}

export default Voicepad;