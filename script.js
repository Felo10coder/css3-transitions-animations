
let club_name = "Arsenal" // global scope

const calculate_points = document.getElementById("points");

// function to listen for an event 'click' and prompt user to enter no: of wins and draws then calculates total points
calculate_points.addEventListener("click",()=> {
    calculate_points.style.backgroundColor = "green";
    calculate_points.style.color = "white";
  // Prompt user for input
  let wins = parseInt(prompt("Enter number of games won:")) || 0; // local scope
  let draws = parseInt(prompt("Enter number of games drawn:")) || 0;
  let totalpoints = (wins*3) + (draws*1);
  // displays a message showing the points
  document.getElementById("output").innerText = 
    `${club_name} has ${totalpoints} points.`;
})

// PART 3

const box2 = document.getElementById("movingBox");
const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");

// function to pause and play the moving box
pauseButton.addEventListener("click", () => {
  box2.style.animationPlayState = "paused";
});

resumeButton.addEventListener("click", () => {
  box2.style.animationPlayState = "running";
});

