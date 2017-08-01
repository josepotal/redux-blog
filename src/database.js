import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyARXUMqS5Ajml-94aSgSdhHQfUEabFurFo",
  authDomain: "redux-blog-328f5.firebaseapp.com",
  databaseURL: "https://redux-blog-328f5.firebaseio.com",
  projectId: "redux-blog-328f5",
  storageBucket: "redux-blog-328f5.appspot.com",
  messagingSenderId: "250352580777"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;