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
      words: ''
    }
    this.handleWords = this.handleWords.bind(this);
  }

  handleWords(e){
    this.setState({words: e.target.value})
  }

  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props
 
    if (!browserSupportsSpeechRecognition) {
      return null
    }
 
    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
        <form>
        <input
          name="Words"
          type="text"
          value={this.state.words}
          onChange={() => {this.handleWords({transcript})}}
        />
        </form>
      </div>
    )
  }
}
 
Writing.propTypes = propTypes
 
export default SpeechRecognition(Writing)