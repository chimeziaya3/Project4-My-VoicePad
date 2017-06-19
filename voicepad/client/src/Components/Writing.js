import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'






const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}
 
class Writing extends Component {
  constructor(props){
    super(props);
    this.state = {
      words: '',
      recording: false,
    }
    this.handleWords = this.handleWords.bind(this);
  }

  isNotRecording(){
    this.setState({recording: false})
  }

  isRecording(){
    this.setState({recording: true})
  }

  handleWords(e){
    this.setState({words: e.target.value})
  }

  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props
 
    if (!browserSupportsSpeechRecognition) {
      return null
    }

    if (this.state.recording === true) {
      return transcript
    }
 
    return (
      <div>
        <nav className='navbar'>
          <div className='logoContainer_Nav'>
            <h2 className='logo'>{this.props.match.id}</h2>
          </div> 
        </nav>
        <span className='transcript'>{transcript}</span>
        <footer className='textControl'>
          <div className='textControlContainer' onClick={() => this.isNotRecording}>
            <span className="fa-stack fa-2x micContainer">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-stop fa-stack-1x fa-inverse"></i>
              </span>

              <span className="fa-stack fa-5x micContainer" onClick={() => this.isNotRecording}>
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-microphone fa-stack-1x fa-inverse"></i>
              </span>

              <span className="fa-stack fa-2x micContainer">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-floppy-o fa-stack-1x fa-inverse"></i>
              </span>
              
          </div>
          <div className="fa-stack fa-1x refreshContainer" onClick={resetTranscript}>
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-refresh fa-stack-1x fa-inverse"></i>
          </div>
        </footer>
      </div>
    )
  }
}
 
Writing.propTypes = propTypes
 
export default SpeechRecognition(Writing)