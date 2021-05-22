function calculateBMI() { // the function on click which we added on the html page, now here I'm going to add a function to it
  var heightInput = document.getElementById("height"); // so the heightInput will the same as the height wich will in the HTM page 
  var weightInput = document.getElementById("weight"); // so the weightInput will the same as the height wich will in the HTM page 

  var heightInMeters = heightInput.value / 100

  var BMI = weightInput.value / (heightInMeters * heightInMeters)  /** mass / height^2. This is how it will be calculated so the BMI will be equal to the value  
  we'll write on the boxes in the webpage will be devided with (heigh in meters * height in metters) this is because we will write in centimeters our height and that 
  will be converted to meters for exaple 170 = 1.70 */

  var underWeight = 18.5; //I added this part because I wanted an if statement which will tell us when we're norman, underwight, or overweight. This first one is only for underwight
  var overWeight = 30; //this is for the overweight
  //anything in between this two is normal 

  if(BMI < underWeight) {
    document.getElementById("result").innerHTML = "Your BMI is: " + BMI + ". You are underweight!" // this is if our bmi is lower than 18.5
  } else if (BMI > overWeight) {
    document.getElementById("result").innerHTML = "Your BMI is: " + BMI + ". You are overweight!"   //this is if our bmi is higher than 30
  } else {
    document.getElementById("result").innerHTML = "Your BMI is: " + BMI + ". Your weight is normal."  //and anything in beween overweight and underweight is normal.
  }
}
