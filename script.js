function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const heightUnit = document.getElementById("heightUnit").value;
  const weightUnit = document.getElementById("weightUnit").value;

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight values.");
    return;
  }

  // Maximum limits
  const maxHeightCm = 272;
  const maxHeightInches = 107; // 8 feet 11 inches
  const maxWeightKg = 635;
  const maxWeightLbs = 1400;

  // Check if height or weight exceed limits
  const heightExceeds = (heightUnit === "cm" && height > maxHeightCm) ||
                        (heightUnit === "in" && height > maxHeightInches);
  const weightExceeds = (weightUnit === "kg" && weight > maxWeightKg) ||
                        (weightUnit === "lb" && weight > maxWeightLbs);

  if (heightExceeds && weightExceeds) {
    alert("Both height and weight exceed the maximum recorded human limits. Please enter valid values.");
    return;
  } else if (heightExceeds) {
    alert("Height exceeds the maximum recorded human height. Please enter a valid value.");
    return;
  } else if (weightExceeds) {
    alert("Weight exceeds the maximum recorded human weight. Please enter a valid value.");
    return;
  }

  let heightInMeters = heightUnit === "cm" ? height / 100 : height * 0.0254;
  let weightInKg = weightUnit === "kg" ? weight : weight * 0.453592;

  const bmi = weightInKg / (heightInMeters * heightInMeters);
  const bmiRounded = bmi.toFixed(2);

  const bmiValue = document.getElementById("bmiValue");
  const bmiMessage = document.getElementById("bmiMessage");
  const resultBox = document.getElementById("resultBox");

  bmiValue.textContent = bmiRounded;

  if (bmi < 18.5) {
    resultBox.className = "underweight";
    bmiMessage.innerHTML = `
      You are underweight. Consider a balanced diet and strength-building exercises.
      <br><strong>Exercises:</strong> Squats, Deadlifts, Bench Presses, Pull-ups.
      <br><strong>Diet:</strong> High-protein foods, nuts, dairy, whole grains.
    `;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultBox.className = "normal";
    bmiMessage.innerHTML = `
      You have a normal weight. Great job maintaining a healthy lifestyle!
      <br><strong>Tips:</strong> Continue balanced diet, regular exercise, yoga.
    `;
  } else {
    resultBox.className = "overweight";
    bmiMessage.innerHTML = `
      You are overweight. Consider a calorie-controlled diet and cardio exercises.
      <br><strong>Exercises:</strong> Walking, Swimming, Dancing, Cycling.
      <br><strong>Diet:</strong> Vegetables, lean proteins, whole grains, low sugar.
    `;
  }
}

function resetForm() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("heightUnit").value = "cm";
  document.getElementById("weightUnit").value = "kg";
  document.getElementById("bmiValue").textContent = "";
  document.getElementById("bmiMessage").textContent = "";
  document.getElementById("resultBox").className = "";
}