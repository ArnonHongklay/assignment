import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyAmhZVfqSUh1Alqv0xiXeGL0uDSbkgHguI",
  authDomain: "limping-food.firebaseapp.com",
  databaseURL: "https://limping-food.firebaseio.com",
  projectId: "limping-food",
  storageBucket: "limping-food.appspot.com",
  messagingSenderId: "227510183366",
  appId: "1:227510183366:web:3f3b0147d3143cd21abec7",
  measurementId: "G-Y4JNSLL2HF"
};

let app = Firebase.initializeApp(config)
export const db = app.firestore()
