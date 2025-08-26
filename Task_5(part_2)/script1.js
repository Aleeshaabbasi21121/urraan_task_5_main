    function convertToMinutes() {
        let hours = document.getElementById("hours").value;

        if (hours === "" || hours < 0) {
            document.getElementById("result").innerHTML = "⚠ Please enter a valid number of hours.";
            return;
        }

        let minutes = hours * 60;

        document.getElementById("result").innerHTML = 
            `${hours} hour(s) is equal to <b>${minutes}</b> minutes.`;
    }
