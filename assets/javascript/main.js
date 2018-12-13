// Initialize Firebase
var config = {
apiKey: "AIzaSyC84nNwmuv7JHw4Z7Hp6ywKpgbPgnteY3w",
authDomain: "train-scheduler-c76b6.firebaseapp.com",
databaseURL: "https://train-scheduler-c76b6.firebaseio.com",
projectId: "train-scheduler-c76b6",
storageBucket: "train-scheduler-c76b6.appspot.com",
messagingSenderId: "484096195493"
};
firebase.initializeApp(config);

var dataRef = firebase.database();

// Initial Values
var name = "";
var destination = "";
var time = 0;
var frequency = 0;

// Capture Button Click
$("#submitbtn").on("click", function(event) {
    event.preventDefault();

    // storing and retrieving the most recent user.
    name = $("#tname").val().trim();
    destination = $("#destination").val().trim();
    time = $("#ftime").val().trim();
    frequency = $("#frequency").val().trim();

    // Code for the push
    dataRef.ref().push({

    name: name,
    destination: destination,
    time: time,
    frequency: frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

// Firebase watcher + initial loader
dataRef.ref().on("child_added", function(childSnapshot) {

    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().time);
    console.log(childSnapshot.val().frequency);
    console.log(childSnapshot.val().joinDate);

    // full list of items to the well
    $("#trains").append("<div class='well'><span class='train-name'> " +
        childSnapshot.val().name +
        " </span><span class='train-destination'> " + childSnapshot.val().destination +
        " </span><span class='train-time'> " + childSnapshot.val().time +
        " </span><span class='train-frequency'> " + childSnapshot.val().frequency +
        " </span></div>");

    // Handle the errors
    },function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });
  
    
