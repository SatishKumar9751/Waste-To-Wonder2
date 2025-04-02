function calculatePollution() {
    var city = document.getElementById("city").value;
    var hours = document.getElementById("hours").value;
    
    if (hours <= 0 || hours > 24) {
        alert("Please enter a valid number of hours (1-24).");
        return;
    }

    var aqiLevels = {
        "Delhi": 250, 
        "Mumbai": 120,
        "Patna": 200,
        "Bangalore": 90
    };

    var pollutionAbsorbed = aqiLevels[city] * hours;
    var healthImpact = "";

    if (pollutionAbsorbed < 5000) {
        healthImpact = "Low Impact 🟢 (Minor breathing discomfort)";
    } else if (pollutionAbsorbed < 15000) {
        healthImpact = "Moderate Impact 🟡 (Can cause throat irritation)";
    } else {
        healthImpact = "High Impact 🔴 (Severe breathing problems possible)";
    }

    document.getElementById("result").innerHTML = 
        `You absorbed **${pollutionAbsorbed} AQI units** of pollution.<br> 
        **Health Impact:** ${healthImpact}`;
}
