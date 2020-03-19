import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyBR_vTGZsNbIZ_fmShFZYOo0eus3CDuhzM",
  authDomain: "postit-cloud.firebaseapp.com",
  databaseURL: "https://postit-cloud.firebaseio.com",
  projectId: "postit-cloud",
  storageBucket: "postit-cloud.appspot.com",
  messagingSenderId: "1094505266352",
  appId: "1:1094505266352:web:04bf92dd92f252445ccf75",
  measurementId: "G-5VKBXFKEXV"
};

let app = Firebase.initializeApp(config)
export const db = app.firestore()
