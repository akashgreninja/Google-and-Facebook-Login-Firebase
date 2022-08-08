import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, signInWithPopup,FacebookAuthProvider,GithubAuthProvider,RecaptchaVerifier  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { doc, setDoc } from "firebase/firestore"; 



const firebaseConfig = {
  apiKey: "AIzaSyBOMQPcIxTBNp2h0rDx6jUIltXuo2wqsjE",
  authDomain: "testing-auth-f7e56.firebaseapp.com",
  projectId: "testing-auth-f7e56",
  storageBucket: "testing-auth-f7e56.appspot.com",
  messagingSenderId: "336252674843",
  appId: "1:336252674843:web:efb644dfcbcf4bb8b729be",
  measurementId: "G-VRS8XM85JT"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);
const fbprovider = new FacebookAuthProvider();
const gitprovider = new GithubAuthProvider();
const provider = new GoogleAuthProvider();


 export const SignIn=async()=>{
    signInWithPopup(auth, provider).then(async(result)=>{

        
        const user = result.user.displayName;
        const email =result.user.email;
        const phone=result.user.phoneNumber;
        const photo=result.user.photoURL;
        
        const docRef = await addDoc(collection(db, "users"), {
            user: user,
            email:email,
            photo: photo,
          });
        // await User.set(user)
        //   console.log(user);
        
    //INCASE YOU WANT TO CHANGE THE ID
    // const cityRef = doc(db, 'users', `${user}`);
    // setDoc(cityRef, { user:user  }, );
            
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
    })
}



export const facebook=()=>{
  signInWithPopup(auth, fbprovider).then((result)=>{
    const user = result.user.displayName;
    const email =result.user.email;
    const photo=result.user.photoURL;
    const addingadoc=addDoc(collection(db,"facebook"),{
      user:user,
      email:email,
      photo:photo
    })
    
  }).catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
  })
}


export const github=()=>{
  signInWithPopup(auth, gitprovider).then((result)=>{
    const user = result.user.displayName;
    const email =result.user.email;
    const photo=result.user.photoURL;
    const addingadoc=addDoc(collection(db,"github"),{
      user:user,
      email:email,
      photo:photo
    })
  
    
  }).catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
  })
}



export const phone=(number)=>{
  const recaptcha = new RecaptchaVerifier('recaptcha-container', {}, auth);
    
}