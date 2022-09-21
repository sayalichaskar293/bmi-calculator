"use-strict"


let heightInM = document.querySelector("#hinm");
let weightInKg = document.querySelector("#winkg");
let submitButton = document.querySelector(".calc");
let finalAnswer= document.querySelector(".answer");




submitButton.addEventListener("click" , function() {
  let bmi= Math.round(Number(weightInKg.value)*10000/(Number(heightInM.value)*Number(heightInM.value))) ;
    if(bmi < 18.5){
        finalAnswer.innerHTML = "Your BMI is "+bmi+", so you come in the underweight range.";
      } 
      else if ( bmi >= 18.5 && bmi <= 24.9) {
            finalAnswer.innerHTML= "RESULT: Your BMI is "+bmi+", so you come in the normal weight range.";
          } 
          else if ( bmi >= 24.9 && bmi <30) {
              finalAnswer.innerHTML = "RESULT: Your BMI is "+bmi+", so you come in the overweight range.";
            }
            else if(bmi>30){
                finalAnswer.innerHTML = "RESULT: Your BMI is "+bmi+", so you come in the obese range.";
            }
            else
             {
                finalAnswer.innerHTML = "RESULT: Invalid input.";
             }
        }
      )

