import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB2dVU5WDSNGy2WG-_Tc7c8LR5I4D5HvqE",
    authDomain: "fire-in-up.firebaseapp.com",
    projectId: "fire-in-up",
    storageBucket: "fire-in-up.appspot.com",
    messagingSenderId: "461494094377",
    appId: "1:461494094377:web:7ef160bdffd12a882c2a38"
  };

  const fire= firebase.initializeApp(firebaseConfig);

  export default fire;