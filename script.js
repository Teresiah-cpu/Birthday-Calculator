//function calculator(){
   // let ageinput=document.getElementById("ageinput");
    //let date=ageinput.date.value
    //let gender=ageinput.gender.value
    //alert(date)
   // alert(gender)
//}
function calc() {
var maleGender = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleGender = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var dd = document.getElementById("day").value;
var year = document.getElementById("year").value;
var mm = document.getElementById("month").value;
var male = document.getElementById("male").checked;
var female = document.getElementById("female").checked;
}
//to select the gender
if (document.getElementById("male").checked) {
var gender = 'male';

} else {
var gender = 'female';
}
//to select the month
if (mm < 1 || mm> 12) {
    alert("Not valid!");
    } else if (dd < 1 || dd> 31) {
        alert("enter a valid day");
        }

 //formula calculation
        var dayOfTheWeek = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;  
        //names selection for females
if (female) {
if (dayOfTheWeek == 0) {
  document.getElementById("results").innerHTML =
  alert("You were born on Sunday hence your Akan name is.. " + femaleGender[0]);
  } else if (dayOfTheWeek == 1) {
  document.getElementById("results").innerHTML =
  alert("You were born on Monday hence your Akan name is.. " + femaleGender[1]);
  } else if (dayOfTheWeek == 2) {
  document.getElementById("results").innerHTML =
  alert("You were born on Tuesday hence your Akan name is.. " + femaleGender[2]);
  } else if (dayOfTheWeek == 3) {
  document.getElementById("results").innerHTML =
  alert("You were born on Wednesday hence your Akan name is.. " + femaleGender[3]);
  } else if (dayOfTheWeek == 4) {
  document.getElementById("results").innerHTML =
  alert("you were born on Thursday hence your Akan name is.. " + femaleGender[4]);
  } else if (dayOfTheWeek == 5) {
  document.getElementById("results").innerHTML =
  alert("You were born on Friday hence your Akan name is.. " + femaleGender[5]);
  } else if (dayOfTheWeek == 6) {
  document.getElementById("results").innerHTML =
  alert("You were born on Saturday hence your Akan name is.. " + femaleGender[6]);
  }
    
}     