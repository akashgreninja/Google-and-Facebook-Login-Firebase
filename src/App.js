// https://www.youtube.com/watch?v=IivlA4o5RkU


import './App.css';
import {SignIn,facebook,github,phone} from './firebaseauth'

function App() {
  return (
    <>
   <button onClick={SignIn}>Sign In</button>
   <button onClick={facebook}>Facebook</button>
   <button onClick={github}>Github</button>
   <button onClick={phone}>Phone</button>
   <div id='recaptcha-container'/>

   </>

  );
}

export default App;
