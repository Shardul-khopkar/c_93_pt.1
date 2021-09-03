
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBgOo3egRC8VgCQScs_frZuVn91azACALE",
      authDomain: "kwitter-c8c2a.firebaseapp.com",
      databaseURL: "https://kwitter-c8c2a-default-rtdb.firebaseio.com",
      projectId: "kwitter-c8c2a",
      storageBucket: "kwitter-c8c2a.appspot.com",
      messagingSenderId: "900798383699",
      appId: "1:900798383699:web:b52d85048d865bf751a8a6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
