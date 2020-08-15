import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  const config = process.env.firebase;
  firebase.initializeApp({
    apiKey: config.apikey,
    authDomain: config.pid + ".firebaseapp.com",
    databaseURL: "https://" + config.pid + ".firebaseio.com",
    projectId: config.pid,
    storageBucket: config.pid + ".appspot.com",
    messagingSenderId: config.msid,
    appId: config.appid,
    measurementId: config.mid
  });
}

const firestore = firebase.firestore();

export default firestore;
