function formValidation(){
    var text = "";
    // Get the value of the input field with id="numb"
    var y = document.getElementById("year").value;
    var m = document.getElementById("month").value;
    var d = document.getElementById("day").value;
    // If mon is Not a Number or less than one or greater than 10
    if (isNaN(m) || m < 1 || m > 12) {
        text = "Input not valid. Please enter month between 1 and 12";
        document.getElementById("error").innerHTML = text;
    } else if(isNaN(d) || d < 1 || d > 30){
        text = "Input not valid. Please enter day between 1 and 30";
        document.getElementById("error").innerHTML = text;
          } else if (isNaN(y)){
              text = "Input not valid. Please enter valid year";
              document.getElementById("error").innerHTML = text;
              } else {
                   countDown();
              }
}
function countDown(){
    var display = document.getElementById("displayTime");
    var disp = document.getElementById("displayDay");
    var day, month, year;
    
    //get user data
    var userYear = document.getElementById("year").value ;
    var userMonth = document.getElementById("month").value ;
    var userDay = document.getElementById("day").value ;
    var currentDate = new Date();
    
    //process user data for the display
    
    
    if (userYear < currentDate.getFullYear() ){
       year = "invalid year";
    } else {
         year = userYear- currentDate.getFullYear();
    }
    
    if (userMonth <= currentDate.getMonth()){
        month = ((12 - (currentDate.getMonth() + 1)) + parseInt(userMonth) );
        } else {
        month = userMonth - (currentDate.getMonth() + 1);
        }
    
    if (userDay <= currentDate.getDate()){
        day = ((30 - (currentDate.getDate() + 1))+ parseInt(userDay) );
        } else {
        day = userDay - (currentDate.getDate() +1);
        }
    
    var hours = 23 - currentDate.getHours();
    var minutes = 59 - currentDate.getMinutes();
    var seconds = 59 - currentDate.getSeconds();
    
    //display date + time
    var displayDate = year.toString() + ": years " 
    + month.toString() + ": months " 
    + day.toString() + ": days ";
    
    var displayTime = hours.toString() + " hours : " 
    + minutes.toString() + " minutes: " 
    +seconds.toString() + ": seconds";
    
    disp.innerHTML = displayDate;
    display.innerHTML = displayTime;
    setInterval(countDown, 1000);  
}
