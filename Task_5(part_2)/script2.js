    function convertToHours() {
        let seconds = document.getElementById("seconds").value;

        if (seconds === "" || seconds < 0) {
            document.getElementById("result").innerHTML = "⚠ Please enter a valid number of seconds.";
            return;
        }

        let hours = seconds / 3600;

        document.getElementById("result").innerHTML = 
            `${seconds} second(s) is equal to <b>${hours.toFixed(2)}</b> hour(s).`;
    }