$('#quiz').submit(function (event) {

    // Type: radio
    // Find input with name "grassColor" and record the value of the radio selected
    var myGrassColor = 0;
    myGrassColor = parseInt($('input[name = "grassColor"]:checked').val());

    // Type: checkbox
    var myColorScore = 0;
    var correctYesBoxesOnlyScore = 0;
    var yesMinusNoBoxesScore = 0;
    
    // Find input with name "primaryColors". 
    // Record the total correct "yes" boxes that need to be checked for a correct answer.
    $('input[name = "primaryColors"]').each(function () {
        var forPrimaryColors = (this.value == 'yes' ? 1 : 0);
        correctYesBoxesOnlyScore += forPrimaryColors;
    });

    // Find input with name "primaryColors" and tally score of the selected "yes" and "no" boxes.
    // Calculate and record the difference between the checked "yes" and "no" boxes.
    $('input[name = "primaryColors"]').each(function () {
        var forPrimaryColorsYes = (this.value == 'yes' && this.checked ? 1 : 0);
        var forPrimaryColorsNo = (this.value == 'no' && this.checked ? 1 : 0);
        yesMinusNoBoxesScore += forPrimaryColorsYes - forPrimaryColorsNo;
    });
    
    // If the score for checked boxes equals the score needed to get a correct answer,
    // record the stated value points. Otherwise an incorrect answer is given zero value points.
    if (yesMinusNoBoxesScore === correctYesBoxesOnlyScore) {
        myColorScore += 50;
    } else {
        myColorScore += 0;
    }

    //Grade value
    var result = "Your grade is: " + (myGrassColor + myColorScore) + "%.";

    $('#grade').html(result); // Display graded score result.

    event.preventDefault(); // Required to prevent page from refreshing after submitting form.

})