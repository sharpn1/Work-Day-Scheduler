//when html is loaded the page is ready to run 
$(document).ready(function () {
    //Display the date at the top. Call moment.js api to display current date.
    var currentDay = moment().format("dddd Do MMMM YYYY");
    console.log(currentDay)
    $("#currentDay").text(currentDay);

    // Set current time to military time
    var presentTime = moment().format("H");
    console.log(presentTime);

    // call colour change funtion
    timeblockColor();

    // Following function will separate values of each block and change color according to time
    function timeblockColor() {
        $(".timeblockRow").each(function() {
            var eventInput = parseInt($(this).attr("value"));
            // Compare each timeblock to current hour and change color
            if (eventInput < presentTime) {
                $(this).addClass("past");
            }else if (eventInput == presentTime) {
                $(this).addClass("present");
            }else if (eventInput > presentTime) {
                $(this).addClass("future");
            }
        })
    }
    
        // Save Button event listenr
       $(".saveBtn").on("click", function () {
        //setting items in the local storage
        localStorage.setItem("9", ($("#event1").val()))
        localStorage.setItem("10", ($("#event2").val()))
        localStorage.setItem("11", ($("#event3").val()))
        localStorage.setItem("12", ($("#event4").val()))
        localStorage.setItem("13", ($("#event5").val()))
        localStorage.setItem("14", ($("#event6").val()))
        localStorage.setItem("15", ($("#event7").val()))
        localStorage.setItem("16", ($("#event8").val()))
        localStorage.setItem("17", ($("#event9").val()))
    })

        //get stored items in the local storage and append. When refreshed, stored items display in the planner
        $("#event1").append(localStorage.getItem("9"));
        $("#event2").append(localStorage.getItem("10"));
        $("#event3").append(localStorage.getItem("11"));
        $("#event4").append(localStorage.getItem("12"));
        $("#event5").append(localStorage.getItem("13"));
        $("#event6").append(localStorage.getItem("14"));
        $("#event7").append(localStorage.getItem("15"));
        $("#event8").append(localStorage.getItem("16"));
        $("#event9").append(localStorage.getItem("17"));
})