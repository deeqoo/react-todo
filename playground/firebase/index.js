import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCJGSfqPQxmC0TIc3ubGtw3xjdaajWmh9Y",
    authDomain: "deeqoo-todo-app.firebaseapp.com",
    databaseURL: "https://deeqoo-todo-app.firebaseio.com",
    storageBucket: "deeqoo-todo-app.appspot.com",
    messagingSenderId: "658117102178"
  };

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Mohammed',
    age: 32
  }
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('new todo added', snapshot.key, snapshot.val());
});


// Adding mutiple values
// todosRef.push({
//   text: 'date night',
//   name: 'Shukri',
//   city: 'London'
// });

todosRef.push({
  text: 'swimming session'
});

todosRef.push({
  text: 'hit the gym',
  class: 'Grit session'
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
//
// console.log('Todo Id', newNoteRef.key);




// firebaseRef.child('user').on('value', (snapshot)=>{
//   console.log('User ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'Jaamac'});
// firebaseRef.child('app').update({name: 'Todo Application'});

// Multipath way of updating database
// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Rex'
// });

// Calls to child and then update children
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
//
// firebaseRef.child('user').update({
//   name: 'Jaamac'
// });


// firebaseRef.child('app/name').remove();

// Another way to remove data, null removes that element.
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.update({
//   isRunning: null
// });
// firebaseRef.child('user/age').remove();

// Fetching data from firebase db
// firebaseRef.child('app').once('value').then((snapshot)=>{
//   console.log('Got entire database', snapshot.key ,snapshot.val());
// }, ()=> {
//   console.log('unable to fetch value')
// });

// Listening for changes continually
// var logData = (snapshot)=> {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// // Turning listening off
// firebaseRef.off(logData);
//
// firebaseRef.update({isRunning: false});
