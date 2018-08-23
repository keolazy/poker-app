import firebase from "firebase";

const config = {
  apiKey: "AIzaSyD0JuM9_jOQXgPxyxNB3QzxepXiQLXmUVA",
  authDomain: "q4-poker-app.firebaseapp.com",
  databaseURL: "https://q4-poker-app.firebaseio.com",
  projectId: "q4-poker-app",
  storageBucket: "q4-poker-app.appspot.com",
  messagingSenderId: "948684528262"
};

const fire = firebase.initializeApp(config);

export default fire;
