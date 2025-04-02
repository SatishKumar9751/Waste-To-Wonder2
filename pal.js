function calculatePlasticWaste() {
    let bottles = parseInt(document.getElementById('bottles').value) || 0;
    let bags = parseInt(document.getElementById('bags').value) || 0;
    let containers = parseInt(document.getElementById('containers').value) || 0;

    let dailyWaste = (bottles * 0.02) + (bags * 0.01) + (containers * 0.03);
    let monthlyWaste = dailyWaste * 30;
    let yearlyWaste = dailyWaste * 365;

    document.getElementById('result').innerHTML = 
        `Your Estimated Plastic Waste:<br>
         📅 Daily: ${dailyWaste.toFixed(2)} kg<br>
         📆 Monthly: ${monthlyWaste.toFixed(2)} kg<br>
         📅 Yearly: ${yearlyWaste.toFixed(2)} kg`;
}
