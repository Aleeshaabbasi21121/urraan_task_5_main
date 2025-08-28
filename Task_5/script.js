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
//task 2
// Robust Hours -> Seconds converter
document.getElementById("hoursBtn").addEventListener("click", convertHours);
// allow Enter key in input
document.getElementById("hoursInput").addEventListener("keydown", function(e){
  if(e.key === "Enter") convertHours();
});

function convertHours() {
  const raw = document.getElementById("hoursInput").value.trim();
  const out = document.getElementById("hoursResult");

  if (!raw) {
    out.style.color = "red";
    out.innerText = "⚠️ Please enter hours (e.g. 2.5 or 2:30).";
    return;
  }

  // support "hh:mm" format
  let hours;
  if (raw.includes(":")) {
    const parts = raw.split(":").map(s => s.trim());
    if (parts.length !== 2) {
      out.style.color = "red";
      out.innerText = "⚠️ Invalid time format. Use H:MM (e.g. 2:30).";
      return;
    }
    const hh = Number(parts[0]);
    const mm = Number(parts[1]);
    if (!Number.isFinite(hh) || !Number.isFinite(mm) || hh < 0 || mm < 0 || mm >= 60) {
      out.style.color = "red";
      out.innerText = "⚠️ Invalid hours or minutes.";
      return;
    }
    hours = hh + mm / 60;
  } else {
    // accept comma or dot decimal separators
    const normalized = raw.replace(",", ".");
    hours = Number(normalized);
    if (!Number.isFinite(hours)) {
      out.style.color = "red";
      out.innerText = "⚠️ Invalid number. Enter numeric hours (e.g. 2.5).";
      return;
    }
    if (hours < 0) {
      out.style.color = "red";
      out.innerText = "⚠️ Please enter a non-negative value.";
      return;
    }
  }

  // compute seconds
  const seconds = hours * 3600;
  // nice formatting: show hours with up to 2 decimals, seconds integer if whole else 2 decimals
  const hoursDisplay = Number.isInteger(hours) ? hours : Number(hours.toFixed(2));
  const secondsDisplay = Number.isInteger(seconds) ? seconds : Number(seconds.toFixed(2));

  out.style.color = "green";
  out.innerText = `${hoursDisplay} hour(s) = ${secondsDisplay} second(s)`;
}

//task 3
// Scenario 1: User provides array
function findNextInUserArray() {
  let userArray = document.getElementById("userArray").value.split(",").map(Number);
  let num = parseInt(document.getElementById("arrayInput").value);
  let index = userArray.indexOf(num);

  if (index === -1) {
    document.getElementById("arrayResult").innerText = "Number not found in array!";
  } else if (index === userArray.length - 1) {
    document.getElementById("arrayResult").innerText = "This is the last number, no next element.";
  } else {
    document.getElementById("arrayResult").innerText = "Next number in array: " + userArray[index + 1];
  }
}

// Scenario 2: Integer or Float next number
function findNextNumber() {
  let num = document.getElementById("numInput").value;

  if (num.includes(".")) {
    document.getElementById("nextResult").innerText = "Next number: " + (parseFloat(num) + 0.1).toFixed(1);
  } else {
    document.getElementById("nextResult").innerText = "Next number: " + (parseInt(num) + 1);
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
