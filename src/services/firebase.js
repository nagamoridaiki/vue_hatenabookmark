import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD23via9fDHUoYIFP7H6pdfvJYs6yBVBW0",
    authDomain: "pitmark-40f84.firebaseapp.com",
    databaseURL: "https://pitmark-40f84.firebaseio.com",
    projectId: "pitmark-40f84",
    storageBucket: "pitmark-40f84.appspot.com",
    messagingSenderId: "34759352939",
    appId: "1:34759352939:web:8697fd4d119617e9a7472e",
  };
firebase.initializeApp(firebaseConfig);

export default firebase;