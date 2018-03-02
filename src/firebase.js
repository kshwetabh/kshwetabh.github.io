import {initializeApp} from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyCN1mWGZlQfalCQL0SLk93UBzN-EdJFvwg",
    authDomain: "smartmirror-143313.firebaseapp.com",
    databaseURL: "https://smartmirror-143313.firebaseio.com",
    projectId: "smartmirror-143313",
    storageBucket: "smartmirror-143313.appspot.com",
    messagingSenderId: "1093135574769"
  });

  export const db = app.database();
//   export const letsfeedfaridabadRef = db.ref('/letsfeedfaridabad');
//   export const heroDescRef = db.ref('herodesc');