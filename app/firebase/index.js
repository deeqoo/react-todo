import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyCJGSfqPQxmC0TIc3ubGtw3xjdaajWmh9Y",
      authDomain: "deeqoo-todo-app.firebaseapp.com",
      databaseURL: "https://deeqoo-todo-app.firebaseio.com",
      storageBucket: "deeqoo-todo-app.appspot.com",
      messagingSenderId: "658117102178"
    };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
