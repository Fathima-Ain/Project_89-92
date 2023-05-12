
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCRkLde0ag6QSnHK2x9GnhrBOSvMTtgtzE",
      authDomain: "kwitter-bd7ee.firebaseapp.com",
      databaseURL: "https://kwitter-bd7ee-default-rtdb.firebaseio.com",
      projectId: "kwitter-bd7ee",
      storageBucket: "kwitter-bd7ee.appspot.com",
      messagingSenderId: "51179525078",
      appId: "1:51179525078:web:4f3c51fa6c92b68efe8a77",
      measurementId: "G-J7FBNJPWCC"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row ="<div cass ='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
   


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")

  window.location="index.html"
}