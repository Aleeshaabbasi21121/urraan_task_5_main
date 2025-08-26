function convertToSeconds() {
        let hours = document.getElementById("hours").value;

        if (hours === "" || hours < 0) {
            document.getElementById("result").innerHTML = "⚠ Please enter a valid number of hours.";
            return;
        }

        let seconds = hours * 3600;

        document.getElementById("result").innerHTML = 
            `${hours} hour(s) is equal to <b>${seconds}</b> seconds.`;
    }