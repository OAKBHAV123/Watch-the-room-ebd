
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBpEtT0RPj_itob4saxyPtugMEi8IlUMk0",
    authDomain: "watch-the-room.firebaseapp.com",
    databaseURL: "https://watch-the-room-default-rtdb.firebaseio.com",
    projectId: "watch-the-room",
    storageBucket: "watch-the-room.appspot.com",
    messagingSenderId: "349713979413",
    appId: "1:349713979413:web:80f2acf7bd7ceed63cd61c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
    
    function addRoom()
    {
          room_name=document.getElementById("room_name").value
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding The Room Name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
row="<div class='room_name' id="+Room_names+"onclick='ReDirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row ;
      //End code
      });});}
      
getData();
function ReDirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
