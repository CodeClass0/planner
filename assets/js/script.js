// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentEl = $("#currentDay")
  var currentTime = dayjs().format('MMM DD, YYYY hh:mm:ss a');
  currentEl.text(currentTime);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  

  //This takes each time block and calls the timeCheck function, which returns a string to update the class of each time block.
  function updateBlockClass(){
    $("#hour-9").attr("class", timeCheck(9));
    $("#hour-10").attr("class",timeCheck(10));
    $("#hour-11").attr("class",timeCheck(11));
    $("#hour-12").attr("class",timeCheck(12));
    $("#hour-13").attr("class",timeCheck(13));
    $("#hour-14").attr("class",timeCheck(14));
    $("#hour-15").attr("class",timeCheck(15));
    $("#hour-16").attr("class",timeCheck(16));
    $("#hour-17").attr("class",timeCheck(17));
  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  //This checks for the time and adjusts each timeblock accordingly.
  function timeCheck(hour){
   var time = dayjs().format('H');
   var classPast = "row time-block past";
   var classPresent = "row time-block present";
   var classFuture = "row time-block future";
   if(hour < time){
    return classPast;
   } else if (hour > time){
    return classFuture;
   } else if (hour == time){
    return classPresent;
   }
   
   alert(time);
  }





  // TODO: Add code to display the current date in the header of the page.
 function clock(){
  currentTime = dayjs().format('MMM DD, YYYY hh:mm:ss a');
  currentEl.text(currentTime);
  updateBlockClass(); //call this function so that if a user is on during an hour change, the UI updates.
 } 

 
 updateBlockClass();
 setInterval(clock, 1000);
});
