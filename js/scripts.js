// VARIABLES // BLÆÆ
//CONTAINER FOR SETTING UP THE WORKOUT
let main = document.getElementsByTagName("main")[0];

let menu = document.getElementById("menu");

let ExerciseFigures = document.getElementById('workout-grid-container').childNodes;

//CONTAINER FOR IN WORKOUT
let inWorkout = document.getElementById("inWorkout");

// create a nodelist with the unique exercises
let allExercisesInNodeList = document.querySelectorAll(".exercises figure");

// turn it into a array
let allExercisesArray = Array.from(allExercisesInNodeList);

// Array for exercises that are included
var includedExercisesArray = [];

// variable for the index of the exercises that are included in the workout
var indexOfExercise;

// array which will contain all the SRC to the images
var arrayWithSrc = [];

// array which will contain all the titles for the exercises
var arrayWithText = [];

// hide all exercises from UI
allExercisesArray.forEach((exercise) => {
  exercise.style.display = "none";
});

// function to reorder the exercises so that the last clicked will be added to the end of the workout
function reorder(exer, dec) {
  // get the end of the array
  var lastone = includedExercisesArray.length;

  // get index on elements which is used to remove a certain element
  indexOfExercise = includedExercisesArray.indexOf(exer);

  // flag for knowing if the exercise is meant to be removed from the array or included and put in the end of the array
  if (dec == "dec") {
    // remove element from array with the index gathered from the variable above
    if (indexOfExercise > -1) {
      includedExercisesArray.splice(indexOfExercise, 1);
    }
  } else {
    // MAKES THE HTML ELEMENT GET POSITIONED LAST IN THE UI
    exer.style.order = lastone;
  }
  changeWorkoutTime();
}

// includes excercises and puts them in the included array or calls the exclude function which removes them
function includeExercise(exercise) {
  var checkBox = document.getElementById("include-" + exercise);
  var workout = document.getElementById(exercise);

  // if checkbox is checked then the element corresponding to the checkbox will appear and put into the included array
  if (checkBox.checked) {
    workout.style.display = "block";
    includedExercisesArray.push(workout);
    reorder(workout);
  } else {
    excludeExercise(exercise);
  }
}

// remove excercises in UI and from array
function excludeExercise(exercise) {
  Aexercise = document.getElementById(exercise);
  Aexercise.style.display = "none";
  reorder(Aexercise, "dec");
}

// Show the duration of the workout
function changeWorkoutTime() {
  // dynamic html element meant to have its innerHTML changed based on the number of exercises
  let workoutTime = document.getElementById("workoutTime");
  let min = Math.floor((includedExercisesArray.length * 35) / 60);
  let sec = Math.floor((includedExercisesArray.length * 35) % 60);

  // add "0" if the number only has one digit
  if (sec < 10) {
    sec = "0" + String(sec);
  }
  if (min < 10) {
    min = "0" + String(min);
  }

  // turning it into minutes if above 60 seconds
  if (includedExercisesArray.length < 2) {
    workoutTime.innerHTML = ` ${min}:${sec} Seconds `;
  } else {
    workoutTime.innerHTML = ` ${min}:${sec} Minutes `;
  }
}
changeWorkoutTime();

/* This function changes the "display" CSS property to "none" if the user
chooses to check a checkbox in the "Exclude certain body parts" form. */
function hideThisBodyPart(bodyPartToHide) {
  var checkBox = document.getElementById("exclude-" + bodyPartToHide);
  var allInputTags = document.getElementsByTagName('input');

  if (checkBox.checked) {
    for (var i = 0; i < allInputTags.length; i++) {
      if (allInputTags[i].type == 'checkbox' && allInputTags[i].className.includes(bodyPartToHide)) {
        allInputTags[i].checked = false;
        allInputTags[i].disabled = true;
        excludeExercise(allInputTags[i].id.substring(8));
      }
    }
  } else {
    for (var i = 0; i < allInputTags.length; i++) {
      if (allInputTags[i].type == 'checkbox' && allInputTags[i].className.includes(bodyPartToHide)) {
        allInputTags[i].disabled = false;
      }
    }
  }
}

function startWorkout() {
  // creating eventlistener for the start button
  let startButton = document.getElementById("start-button");
  startButton.addEventListener("click", () => {

    if (includedExercisesArray.length == 0) {
      // this will make every exercise included if user does not choose any
      includedExercisesArray = allExercisesArray.slice();
      alert("All excercises will get included in your workout. If this was not the desired outcome,\
 you can return to the main menu by clicking the 'back to main menu' button")
      changeWorkoutTime()

      // fill the array with src and array with text.  ALL exercises
      includedExercisesArray.forEach((item) => {
        arrayWithText.push(item.childNodes[3].childNodes[1]);
        arrayWithSrc.push(item.childNodes[1].getAttribute("src"));
        initialValues();
      });
    } else {
      // Fills text and src array with the CHOSEN exercises.
      includedExercisesArray.forEach((item) => {
        arrayWithText.push(item.childNodes[3].childNodes[1]);
        arrayWithSrc.push(item.childNodes[1].getAttribute("src"));
        initialValues();
      });
    }
    // PROCESS TO SHOW OF NEW CONTENT ON SAME PAGE
    toggleInterface()
  });
}

/* This function checks with the interface (either the menu of the inWorkout) 
is displayed. Then the function runs it toggles the staes. (reversing display none and block) */
function toggleInterface() {
  menu.style.display = "none";
  inWorkout.style.display = "block";
  startButton.disabled = false;
}

/* This function is used to reset the system to its default state. It runs when 
the user presses the "back to menu"-button. Its empties out array and hides the workouts the user selected previously */
var progressbar = document.getElementById("progress");

function uncheckAll() {
  let allInputTags = document.getElementsByTagName('input');
  for (var i = 0; i < allInputTags.length; i++) {
    if (allInputTags[i].type == 'checkbox') {
      allInputTags[i].checked = false;
      allInputTags[i].disabled = false;
    }
  }
}

function backToMenu() {
  location.reload();
}

startWorkout();