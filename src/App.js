// import logo from './logo.svg';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// // CSS
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';

// function App() {
//   const {
//     transcript,
//     interimTranscript,
//     finalTranscript,
//     resetTranscript,
//     listening,
//    } = useSpeechRecognition();

//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
//   };

//   const listenToUser = () => {
//     SpeechRecognition.startListening({
//       language: 'en-IN',
//     })
//   };

//   return (
//     <div className="App">
//       <Button onClick={listenToUser}>Start</Button>
//       <br />
//       <Button onClick={SpeechRecognition.stopListening}>Stop</Button>
//       <br />
//       <Button onClick={resetTranscript}>Reset</Button>
//       <br />
//       <p>Transcript: {transcript}</p>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone