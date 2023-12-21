// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //Set the date before calling timer so there's no delay before it appears
  var currentEl = $("#currentDay")
  var currentTime = dayjs().format('MMM DD, YYYY hh:mm:ss a');
  
  
  currentEl.text(currentTime);

  //start timer
  setInterval(clock, 1000);

  //call the updateBlock function, which sets the colors of each block.
  updateBlockClass();
  
  //fill in each block with local storage content
  populateBlocksOnLoad();


  function populateBlocksOnLoad(){
    $(".description9").val(localStorage.getItem(9));
    $(".description10").val(localStorage.getItem(10));
    $(".description11").val(localStorage.getItem(11));
    $(".description12").val(localStorage.getItem(12));
    $(".description13").val(localStorage.getItem(13));
    $(".description14").val(localStorage.getItem(14));
    $(".description15").val(localStorage.getItem(15));
    $(".description16").val(localStorage.getItem(16));
    $(".description17").val(localStorage.getItem(17));
  }
  
  //saveBtn commits data to localStorage
  //I don't know if it's part of the assignment 
  //for one save button to save one block, but it 
  //seems easier for a user to only save once, so
  //save button saves all time blocks.
  $(".saveBtn").on("click",function(){
    var update9 = $(".description9").val();
    localStorage.setItem("9", update9);

    var update10 = $(".description10").val();
    localStorage.setItem("10", update10);

    var update11 = $(".description11").val();
    localStorage.setItem("11", update11);

    var update12 = $(".description12").val();
    localStorage.setItem("12", update12);

    var update13 = $(".description13").val();
    localStorage.setItem("13", update13);

    var update14 = $(".description14").val();
    localStorage.setItem("14", update14);

    var update15 = $(".description15").val();
    localStorage.setItem("15", update15);
    
    var update16 = $(".description16").val();
    localStorage.setItem("16", update16);
    
    var update17 = $(".description17").val();
    localStorage.setItem("17", update17);
  });
  

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

 

});
