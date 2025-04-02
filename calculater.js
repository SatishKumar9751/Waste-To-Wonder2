function calculateFootprint() {
    let vehicle = document.getElementById("vehicle").value;
    let hours = parseFloat(document.getElementById("hours").value);
    let acUsage = document.getElementById("ac").value;
    let traffic = document.getElementById("traffic").value;

    if (isNaN(hours) || hours <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid hours!";
        return;
    }

    let emissionFactor = 0;

    if (vehicle === "petrol") {
        emissionFactor = 2.3; // kg CO2 per hour
    } else if (vehicle === "diesel") {
        emissionFactor = 2.7;
    } else if (vehicle === "electric") {
        emissionFactor = 0.5;
    }

    if (acUsage === "yes") {
        emissionFactor += 0.5; // Extra CO2 due to AC
    }

    if (traffic === "moderate") {
        emissionFactor *= 1.2;
    } else if (traffic === "high") {
        emissionFactor *= 1.5;
    }

    let totalEmissions = (emissionFactor * hours).toFixed(2);

    document.getElementById("result").innerHTML = 
        `Your carbon footprint is <b>${totalEmissions} kg CO2</b> for this trip.`;
}
