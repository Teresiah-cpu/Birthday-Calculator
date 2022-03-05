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