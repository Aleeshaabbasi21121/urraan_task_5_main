// Scenario 1: Find next number in an array
    function findNextInArray() {
        let arr = document.getElementById("arrayInput").value.split(",").map(Number);
        let target = Number(document.getElementById("targetInput").value);

        let index = arr.indexOf(target);
        if (index !== -1 && index < arr.length - 1) {
            document.getElementById("resultBox").innerText = 
                `In array: Next to ${target} is ${arr[index + 1]}`;
        } else {
            document.getElementById("resultBox").innerText = 
                `In array: No next number found for ${target}`;
        }
    }

    // Scenario 2: Find next number (check integer vs float)
    function findNextSingle() {
        let input = document.getElementById("singleInput").value;
        let num = Number(input);

        if (isNaN(num)) {
            document.getElementById("resultBox").innerText = "Please enter a valid number.";
            return;
        }

        if (Number.isInteger(num)) {
            document.getElementById("resultBox").innerText = 
                `You entered ${num}. It's an integer. Next integer is ${num + 1}`;
        } else {
            // Float case
            let nextFloat = num + 1; // You can change increment size if needed
            document.getElementById("resultBox").innerText = 
                `You entered ${num}. It's a float. Next float (adding 1) is ${nextFloat}`;
        }
    }
