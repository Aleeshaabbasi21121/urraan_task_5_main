// Show selected task
function showTask(taskId) {
  document.querySelectorAll(".task-card").forEach(card => card.style.display = "none");
  document.getElementById(taskId).style.display = "block";
}

// Task 1: Age to Days
function convertAge() {
  let age = document.getElementById("ageInput").value;
  let result = age * 365;
  document.getElementById("ageResult").innerText = `Age in days: ${result}`;
}

// Task 2: Hours to Seconds
function convertHours() {
  let hours = document.getElementById("hoursInput").value;
  let result = hours * 3600;
  document.getElementById("hoursResult").innerText = `Hours in seconds: ${result}`;
}

// Scenario 1: Next Number in Array
function findNextInArray() {
  let arr = [5, 10, 15, 20, 25];
  let num = parseInt(document.getElementById("arrayInput").value);
  let index = arr.indexOf(num);

  if (index === -1) {
    document.getElementById("arrayResult").innerText = "Number not found in array.";
  } else if (index === arr.length - 1) {
    document.getElementById("arrayResult").innerText = "No next number (last element).";
  } else {
    document.getElementById("arrayResult").innerText = "Next number is: " + arr[index + 1];
  }
}

// Scenario 2: Single Value (Integer or Float)
function findNextSingle() {
  let input = document.getElementById("singleInput").value;
  let num = Number(input);

  if (isNaN(num)) {
    document.getElementById("singleResult").innerText = "Please enter a valid number.";
    return;
  }

  if (Number.isInteger(num)) {
    document.getElementById("singleResult").innerText = "Next integer is: " + (num + 1);
  } else {
    document.getElementById("singleResult").innerText = "Next float is: " + (num + 0.1).toFixed(1);
  }
}

// Task 4: Capitalize Name
function capitalizeName() {
  let name = document.getElementById("nameInput").value;
  let parts = name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
  document.getElementById("nameResult").innerText = `Capitalized: ${parts.join(" ")}`;
}

// Task 5: BMI Calculator
function calculateBMI() {
  let weight = document.getElementById("weightInput").value;
  let height = document.getElementById("heightInput").value;

  if (weight <= 0 || height <= 0) {
    document.getElementById("bmiResult").innerText = "⚠️ Enter valid numbers.";
    return;
  }

  let bmi = weight / (height * height);
  let status = "";

  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 25) status = "Normal";
  else if (bmi < 30) status = "Overweight";
  else status = "Obese";

  document.getElementById("bmiResult").innerText = `Your BMI: ${bmi.toFixed(2)} (${status})`;
}
//task 6
let randomArray = [];

// Function to generate random array
function generateArray() {
  randomArray = []; // reset array
  for (let i = 0; i < 6; i++) {   // generate 6 random numbers
    randomArray.push(Math.floor(Math.random() * 100)); // 0–99
  }
  document.getElementById("arrayDisplay").innerText = "Array: " + randomArray.join(", ");
  document.getElementById("pickResult").innerText = ""; // reset old result
}

// Function to pick first & last element
function pickFirstLast() {
  if (randomArray.length === 0) {
    document.getElementById("pickResult").innerText = "Please generate the array first.";
    return;
  }
  let first = randomArray[0];
  let last = randomArray[randomArray.length - 1];
  document.getElementById("pickResult").innerText = "First: " + first + " | Last: " + last;
}


// Task 7: Add Two Numbers with Event Handling
document.getElementById("num1").addEventListener("input", updateSum);
document.getElementById("num2").addEventListener("input", updateSum);

function updateSum() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let sumField = document.getElementById("sumResult");

  if (num1 !== "" && num2 !== "") {
    sumField.value = Number(num1) + Number(num2);
  } else if (num1 !== "" && num2 === "") {
    sumField.value = "NaN";
  } else {
    sumField.value = "";
  }
}
