//YOUR FIREBASE LINKS
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
  function send()
{
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0,
   });

   document.getElementById("msg").value ="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(messege_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>  "+name+" <img class='user_tick' src='tick.png'<h4>"
message_with_tag = "<h4 class='message_h4'>" +message+ "<h4>"
like_button = "<button class = 'btn btn-warning' id= "+firebase_message_id+" value="+like+" onclick=''"
      } });  }); }
getData();
