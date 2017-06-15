import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Landing extends Component {
    render(){
        return (
            <div className='landingPage'>
                <div className='logoContainer'>
                    <h1 className='logo'>My VoicePad</h1>
                    <button className='enterLandingPageBtn'><Link to="/voicepad">click here</Link></button>
                </div>
            </div>
        )
    }
}

export default Landing;