
document.getElementById("mpgForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const milesTraveled = Number(document.getElementById("miles").value);
  const gallonsOfGasUsed = Number(document.getElementById("gallons").value);
  const result = document.getElementById("result");

  if (!Number.isFinite(milesTraveled) || milesTraveled < 0 ||
      !Number.isFinite(gallonsOfGasUsed) || gallonsOfGasUsed <= 0) {
    result.textContent = "Please enter valid miles and gallons.";
    return;
  }

  const milesPerGallon = milesTraveled / gallonsOfGasUsed;

  result.textContent = "Fuel Efficiency: " +
    milesPerGallon.toFixed(2) + " MPG";
});
