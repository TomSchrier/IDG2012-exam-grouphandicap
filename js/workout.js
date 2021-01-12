
// ARRAYS NEEDED FOR LOOKING AT ALL EXERCISES
// pictures of exercises
const pictures = [
  "assets/illustrations/crunch.png",
  "assets/illustrations/jumping-jack.png",
  "assets/illustrations/lunge.png",
  "assets/illustrations/plank.png",
  "assets/illustrations/push-up-rotate.png",
  "assets/illustrations/push-up.png",
  "assets/illustrations/running.png",
  "assets/illustrations/side-plank.png",
  "assets/illustrations/squat.png",
  "assets/illustrations/step-up.png",
  "assets/illustrations/triceps-dip.png",
  "assets/illustrations/wall-sit.png",
];

// finish picture
const finish = "assets/illustrations/finish.png";

// pause picture
const pausePicture = "assets/illustrations/pause.png";

// titles for the exercises
const titles = [
  "Crunch",
  "Jumping jacks",
  "Lunge",
  "Plank",
  "Push-up-Rotate",
  "Push-up",
  "Running",
  "Side-plank",
  "Squat",
  "Step-up",
  "Triceps-dip",
  "Wall-sit",
];

// descriptions for the exercises.
const description = {
  crunch: `
<ol aria-live="assertive" >
<li>Starting Position: Lie in a supine (on your back) position on a mat with your knees bent, feet flat on the floor 
and heels 12 - 18" from your tailbone.</li>
<li>Place your hands behind your head, squeezing your scapulae (shoulder blades) together and pulling 
your elbows back without arching your low back. 
This elbow position should be maintained throughout the exercise. 
Align your head with your spine, but allow it to move into slight flexion (moving the chin towards the chest) 
during the upward phase of the exercise.</li>
<li>Upward Phase: Exhale, contract your abdominal and core muscles and flex your chin slightly towards your chest while slowly 
curling your torso towards your thighs. 
The movement should focus on pulling your rib cage towards your pelvis (the neck stays relaxed while the chin is tucked towards the neck). 
Your feet, tailbone and lower back should remain in contact with the mat at all times. Continue curling up until your upper back is 
lifted off the mat. Hold this position briefly.</li>
<li>Downward Phase: Gently inhale and slowly uncurl (lower) your torso back towards the mat in a controlled fashion keeping your feet, 
tailbone and low back in contact with the mat.
Proper form is important for this exercise to prevent excessive stress on your low back. 
Individuals usually perform this movement too rapidly and recruit the hip flexors to assist with the upward phase. 
This technique tilts the pelvis anteriorly, increasing the stress on the low back and should be avoided. 
The abdominals connect the rib cage to the pelvis so the movement should focus on bringing these two body parts 
closer together while keeping the neck and shoulders relaxed.</li>
</ol>`,
  jumpingjacks: `
<ol>
<li>Stand upright with your legs together, arms at your sides.</li>
<li>Bend your knees slightly, and jump into the air.</li>
<li>As you jump, spread your legs to be about shoulder-width apart. Stretch your arms out and over your head.</li>
<li>Jump back to starting position.</li>
</ol>`,
  lunge: `
<ol>
<li>Starting Position: Stand with your feet together.
Depress and retract your scapulae (pull your shoulders down and back) without arching your low back, and "brace"
(engage your abdominal/core muscles) to stiffen your spine.</li>
<li>In preparation to step forward, slowly lift one foot off the floor, stabilizing your body on the stance (supporting) leg.
Avoid any sideways tilting or swaying in your upper body and try not to move the stance (supporting) foot.
Hold this position momentarily before stepping forward.
The raised (swing) leg should initiate contact with a heel strike first, slowly transferring your body weight into the leading (forward)foot placed firmly on the floor.
As you load into this leg, avoid any sideways tilting or swaying in your upper body and try not to move the stance (supporting) foot.</li><li>As you lunge forward, focus more on dropping your hips towards the floor rather than driving your hips forward.
This will help control the amount of forward movement of your shinbone (forward tibial translation) over your foot.
Continue lowering your body to a comfortable position or until your front thigh becomes parallel with the floor and your tibia (shinbone)is in a slight forward lean.
While lunging, simultaneously, bend forward at your hips, maintaining a flat back.</li><li>Firmly push off with your front leg, activating both your quads and glutes (thighs and butt muscles) to return to your upright, starting position.
We suggest you first learn how to perform single leg-stands on the ground before performing this forward lunge.
Once you master the forward lunge, you can progress to doing a lunge using arm drivers and mult-directional glute activation lunges.</li></ol>
`,
  plank: `<ol>
<li>Starting Position: Lie prone (on your stomach) on an exercise mat or floor with your elbows close to your sides and directly under your shoulders, palms down and hands facing forward.
Contract your quadriceps to extend your legs and dorsiflex your ankles (pull toes towards your shins).
Contract your core and abdominal muscles to stiffen your torso.</li>
<li>Upward Phase. Slowly lift your entire torso off the floor or mat, maintaining a stiff torso and legs.
Avoid any arching (sagging) in your low back, hiking (upwards) in your hips, or bending in the knees.
Avoid shrugging your shoulder and keep your shoulders positioned directly over your elbows with your palms facing down.
Continue to breathe while holding this position for a specified time (5+ seconds).</li><li>Downward Phase: While maintaining a stiff torso and extended knees, gently lower your body back towards the mat or floor before relaxing.
If you experience any pain in the low back with this movement, stop the exercise immediately and consult with your doctor.</li></ol>

`,
  pushupandrotate: `<ol>
<li>Start in a plank position, with your shoulders over your wrists and legs out behind you with your feet hip-distance apart.
Pull your navel in and keep your back straight.</li>
<li>As you lower and exhale, bend your elbows outward to the sides.
Hold at the bottom for one breath.</li>
<li>Raise back up to top push-up position.
As you reach the top, keep moving in a fluid motion to the side plank position: release your right arm and raise it to the ceiling, keeping your body in a long diagonal line.
Hold for one breath, then move back into plank position.</li><li>Repeat the push-up, twisting the opposite direction bringing your left arm toward the ceiling.
Return to plank position to complete one rep.</li>
</ol>
`,
  pushups: `<ol>
<li>Starting Position: Kneel on an exercise mat or floor and bring your feet together behind you.
<li>Slowly bend forward to place your palms flat on the mat, positioning your hands shoulder-width apart with your fingers facing forward or turned slightly inward.
Slowly shift your weight forward until your shoulders are positioned directly over your hands.
Reposition your hands as needed to allow full extension of your body without any bend at the hips or knees.
Stiffen your torso by contracting your core/abdominal muscles ("bracing"), your glute and quadriceps muscles, and align your head with your spine.
Place your feet together with your ankles dorsiflexed (toes pointed towards your shins).</li><li>Downward Phase: Slowly lower your body towards the floor while maintaining a rigid torso and head aligned with your spine.
Do not allow your low back to sag or your hips to hike upwards during this downward phase.
Continue to lower yourself until your chest or chin touch the mat/floor.
Allow your elbows to flare outwards during the lowering phase.</li>
<li>Upward Phase: Press upwards through your arms while maintaining a rigid torso and head aligned with your spine.
For extra strength, think about pushing the floor away from you.
Do not allow your low back to sag or your hips to hike upwards.
Continue pressing until the arms are fully extended at the elbows.</li>
<li>An alternative position is to turn your hands to face forwards and keep your elbows close to your sides during the downward phase.
This shifts the chest muscles' emphasis onto the triceps and may reduce stresses in the shoulder joint.
Pushing through the heel and outside surface of your palm provides greater force in your press and stability to your shoulders.</li></ol>
`,
  running: `<ol>
<li>Stand straight with your feet shoulder width apart and face forward, opening up your chest.</li><li>Start pulling your knees up, and slowly land on the balls of your feet.</li><li>Repeat until set is complete.</li>
</ol>
`,
  sideplank: `<ol>
<li>Starting Position: Lie on your right side on an exercise mat with extended legs, placing your left leg directly over your right leg and stacking your feet, one on top of the other.
Place your right elbow directly under your shoulder, align your head with your spine, and keep your hips and right knee in contact with the exercise mat.</li><li>Upward Phase: Exhale, gently contract your abdominal / core muscles to stiffen your spine, and lift your hips and knees off the mat, keeping contact with the side of your right foot and keep head aligned with your spine.
Keep your right elbow positioned directly under your shoulder.</li>
<li>Lowering Phase: Inhale and gently return yourself to your starting position. Alternate sides and repeat.</li>
<li>Exercise Variation: You can increase the intensity of this exercise by (1) increasing the length of time you are in the raised position, (2) raising the upper leg of the lower leg, or (3) raising the lower leg off the floor and maintaining contact with your elbow and the foot of the upper leg only.
When raising the upper leg of the lower leg, there is no need to raise it to a level beyond parallel with the floor.</li></ol>
`,
  squat: `<ol>
<li>Stand with the bar on your upper back and your feet shoulder-width apart</li><li>Squat down by pushing your knees to the side while moving hips back</li><li>Break parallel by Squatting down until your hips are lower than your knees</li><li>Squat back up while keeping your knees out and chest up</li><li>Stand with your hips and knees locked at the top</li></ol>
`,
  stepup: `<ol>
<li>Starting Position: Stand with your feet parallel about hip-width apart while holding dumbbells in your hands with palms facing inwards.
Depress and retract your scapulae (pull shoulders down and back).
Attempt to avoid shrugging your shoulder upwards.</li>
<li>Upward Phase: Slowly step to place your right foot on a platform, placing your foot firmly on the deck while keeping your torso upright and aligning your knee over your second toe.
Push off with the trailing (left) leg to raise your body onto the platform, placing it alongside your leading (right) foot.
During this transition, your torso and your right tibia (shinbone) will move slightly forward past vertical, but try to avoid excessive forward movement.</li><li>Downward Phase: Slowly load the weight of your body into your leading (right) foot, step backward to place the trailing (left) foot on the floor in its starting position.
Allow your body to lean slightly forward during the step-down movement. Load your weight into your trailing (left) foot and step off the platform with your leading (right) foot, returning to your starting position.
Repeat for the opposite side.</li>
<li>An exercise progression is to step-up onto one leg only and remain standing on a single-leg before stepping back down.
Single-leg stepping is a functional movement we perform daily.
Always monitor your foot, ankle, and knee position.
Avoid movement of your foot and ankle (collapsing in or out), and always attempt to keep your knee aligned over your second toe.</li></ol>
`,
  tricepsdip: `<ol>
<li>Find a stable chair, bench, or step.</li>
<li>Sit on the edge of the chair and grip the edge next to your hips.
Your fingers should be pointed at your feet.
Your legs are extended, and your feet should be about hip-width apart with the heels touching the ground.
Look straight ahead with your chin up.</li>
<li>Press into your palms to lift your body and slide forward just far enough that your behind clears the edge of the chair.</li><li>Lower yourself until your elbows are bent between 45 and 90 degrees.</li><li>Slowly push yourself back up to the start position and repeat.
Control the movement throughout the range of motion.</li>
<li>Begin with 3 sets of 10 repetitions and increase your sets and reps over several weeks as you build muscle and strength in your triceps.</li></ol>
`,
  wallsit: `<ol>
<li>Start with your back against a wall with your feet shoulder-width and about 2 feet from the wall.</li><li>Engage your abdominal muscles and slowly slide your back down the wall until your thighs are parallel to the ground.</li><li>Adjust your feet so your knees are directly above your ankles (rather than over your toes).</li><li>Keep your back flat against the wall.</li>
<li>Hold the position for 20 to 60 seconds.</li>
<li>Slide slowly back up the wall to a standing position.</li><li>Rest 30 seconds and repeat the exercise three times.
Increase your hold time by five seconds as you increase your strength.</li></ol>
`,
  pause: `<p>Take a break. Get ready for the next one.</p>`
};

// SOUNDS
let startWorkoutAudio = new Audio('assets/audio/sound-workout-start.mp3');
let WorkoutCompleteAudio = new Audio('assets/audio/workout-stop.mp3');
let startExerciseAudio = new Audio('assets/audio/exercise-start.mp3');
let ExerciseCompleteAudio = new Audio('assets/audio/pause-5-seconds.mp3');

// Setting up the voice reader
var title = new SpeechSynthesisUtterance();
title.lang = "en";

// DOM VARIABLES - text and img
let title1 = document.createElement("p");
let title2 = document.createElement("p");
let slideshow = document.getElementById("slideshow");
let slide1 = document.createElement("img");
let slide2 = document.createElement("img");
let textDescription = document.getElementById("descriptions");

// This to hide the second picture and text so that only the current exercise shows
slide2.style.display = "none", title2.style.display = "none";

// progress related elements
let progress = document.getElementById("progress");
let currentstep = document.getElementById("step");
let progressLabel = document.getElementById("progressId");

// buttons
let pauseButton = document.getElementById("pauseButton");
let startButton = document.getElementById("start-startButton");
let continueButton = document.getElementById("continueButton");
continueButton.style.display = "none";
pauseButton.style.display = "none"

//APPENDING and Setting Attributes
slideshow.append(title1, slide1, title2, slide2);
slide1.id = "exerciseFigure", slide1.alt = "";
title1.id = "exerciseText";
slide2.alt = "";

// Setting initial VALUES and ATTRIBUTES
function initialValues() {
  slide1.src = `${arrayWithSrc[0]}`, slide1.alt = `Person demonstrating ${arrayWithText[0].textContent}`.trim();
  title1.innerHTML = arrayWithText[0].textContent;

  var exerciseNamesFromAlt = slide1.alt.replace("Person demonstrating ", "").replace("-", "").replace(/[0-9]/g, "").toLowerCase().replace(/\s+/g, "")
  textDescription.innerHTML = description[exerciseNamesFromAlt];
}

// setting the next slide, time parameter chooses time this function uses to execute
function nextSlide(time) {
  setTimeout(() => {
    slide2.src = slide1.src;
    title2.innerHTML = title1.innerHTML;
  }, time);
}

// THIS IS FOR GURI WHICH HAS PROBLEMS KEEPING UP WITH THE PACE. SHE CAN AT ANYTIME PAUSE THE WORKOUT AND CONTINUE WHEN SHE IS READY
// eventlistener for pause button which pauses workout and changes the UI
function pauseSlide() {
  pauseButton.addEventListener("click", () => {
    slide2.removeEventListener("load", show);
    pauseButton.style.display = "none";
    continueButton.style.display = "inline-block";
  });
}

// eventlistener for continue button which Continues workout and changes the UI
function continueSlide() {
  continueButton.addEventListener("click", () => {
    nextSlide();
    slide2.addEventListener("load", show);
    continueButton.style.display = "none";
    pauseButton.style.display = "inline-block";
  });
}

// eventlistener for start button which starts workout
function beginWorkout() {
  progress.style.display = "block";
  textDescription.style.display = "block";
  startButton.addEventListener("click", () => {
    pauseButton.style.display = "inline-block"
    startButton.style.opacity = "0.5", startButton.disabled = true;
    startWorkoutAudio.play();
    nextSlide(4000);
  });
}

// calling all the functions
beginWorkout(), pauseSlide(), continueSlide();

// change all information when the workout is completed
function finishedWorkout() {
  setTimeout(() => {
    WorkoutCompleteAudio.play();
    slide1.src = `${finish}`, slide1.alt = "Two finishflags crossed";
    textDescription.innerHTML = "Workout complete. Press the \"Back to menu\" button to go back to the menu.";
    // hiding everything 
    pauseButton.style.display = "none", progressLabel.style.display = "none", continueButton.style.display = "none";
    currentstep.style.display = "none", progress.style.display = "none", title1.innerHTML = "";
    window.speechSynthesis.cancel();
  }, 35000);
}

function insertBreaks() {
  setTimeout(() => {
    slide1.src = pausePicture, slide1.alt = "Yellow pause icon";
    title1.innerHTML = "5 seconds break";
    textDescription.innerHTML = description["pause"];
    ExerciseCompleteAudio.play();
  }, 30000); 
}

// counter
let currentSlide = 0;

// eventlistener for when src changes, then run show() function
slide2.addEventListener("load", show);

function show() {
  // Slide 2 will have the same image because of the nextslide function
  if (slide2.src == slide1.src) {

    // A voice will read out different information so FRANCIS WHO IS BLIND, will know what is happening
    // Changing the titles text property to the current exercies and making the browser read and speak the current exercise
    title.text = arrayWithText[currentSlide].textContent;

    // changing the image for slide1 and same for the title and description
    slide1.src = arrayWithSrc[currentSlide];

    title1.innerHTML = arrayWithText[currentSlide].textContent;
    slide1.alt = "Person demonstrating " + arrayWithText[currentSlide].textContent.trim();

    var exerciseNamesFromAlt = slide1.alt.replace("Person demonstrating ", "").replace("-", "").replace(/[0-9]/g, "").toLowerCase().replace(/\s+/g, "")
    textDescription.innerHTML = description[exerciseNamesFromAlt];

    // Voice reading up the exercise name
    window.speechSynthesis.speak(title);

    // progress bar is changed based on where we are in the workout
    progress.value += 100 / arrayWithSrc.length;

    // text that tells user where we are at
    currentstep.style.display = "block", currentstep.innerHTML = `Exercise number ${currentSlide + 1} of ${arrayWithSrc.length}`;

    // This function will start after 30seconds which is the duration of one exercise and will insert a 5 second pause
    insertBreaks()

    // changing the values after the 5 seconds break
    slide1.src = arrayWithSrc[currentSlide];
    title1.innerHTML = arrayWithText[currentSlide].textContent;

    // variables that change based on progress in the workout
    currentSlide++;
    currentSlide = currentSlide % arrayWithSrc.length;

    // after 30 seconds change the img src
    nextSlide(35000);
    startExerciseAudio.play();
  }

  // if workout is finished the clear all information that is not needed anymore
  if (progress.value >= 100) {
    finishedWorkout()
  }
}