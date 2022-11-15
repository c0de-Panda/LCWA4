const firebaseConfig = {
    apiKey: "AIzaSyBD-G61zV09KxKv4EZdBwpFaEH_DpJeMUg",
    authDomain: "let-s-chat-web-app-aa34d.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-aa34d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-aa34d",
    storageBucket: "let-s-chat-web-app-aa34d.appspot.com",
    messagingSenderId: "1016122085577",
    appId: "1:1016122085577:web:8bc39199ce9822a9e9bd18"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function Send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name: user_name,
          message:msg,
          like:0
  });
  document.getElementById("msg").value = "";
  }