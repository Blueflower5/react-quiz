import { useEffect } from "react";
// Set the timer to 8 minutes (480 seconds)
let timeRemaining = 480;

// Function to format the time as minutes and seconds
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

// Function to update the timer display
function updateTimer() {
  console.log(formatTime(timeRemaining));
  timeRemaining--;

  // Stop the timer when it reaches 0
  if (timeRemaining < 0) {
    clearInterval(timerInterval);
    console.log("Timer finished!");
  }
}

// Start the timer and update it every second
const timerInterval = setInterval(updateTimer, 1000);

function Timer() {
  return useEffect(function () {
    // Set the timer to 8 minutes (480 seconds)
    let timeRemaining = 480;

    // Function to format the time as minutes and seconds
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    }

    // Function to update the timer display
    function updateTimer() {
      console.log(formatTime(timeRemaining));
      timeRemaining--;

      // Stop the timer when it reaches 0
      if (timeRemaining < 0) {
        clearInterval(timerInterval);
        console.log("Timer finished!");
      }
    }

    // Start the timer and update it every second
    const timerInterval = setInterval(updateTimer, 1000);
  }, []);
}

export default Timer;
