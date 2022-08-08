
import './App.css';
import {SignIn,facebook} from './firebaseauth'

function App() {
  return (
    <>
   <button onClick={SignIn}>Sign In</button>
   <button onClick={facebook}>Facebook</button>
   </>

  );
}

export default App;
