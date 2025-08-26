function convertToDays() {
        let age = document.getElementById("age").value;

        if (age === "" || age < 0) {
            document.getElementById("result").innerHTML = "⚠ Please enter a valid age.";
            return;
        }

        // Considering 1 year = 365 days (not accounting leap years)
        let days = age * 365;

        document.getElementById("result").innerHTML = 
            `${age} year(s) is approximately <b>${days}</b> days.`;
    }
