$(document).ready(function() {
  window.dancers = [];
  var ghostCount = 0;
  var skeletonCount = 0;
  var witchCount = 0;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    //console.log(typeof dancerMakerFunction, dancerMakerFunction)
    //blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
    //dancerMakerFunction contains method name from html file--> "makeBlinkyDancer"
    // make a new dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(), //top
      $("body").width() * Math.random(), //left
      Math.random() * 1000 // timeBetweenSteps
    );
    $('body').append(dancer.$node); //display on webpage
  });

  //this button will add a skeleton onto dance floor
  $('.addSkeletonButton').on('click',function(event){
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var skeleton = new dancerMakerFunction(
      ($("body").height() - 200)  * Math.random(), //top
      ($("body").width() -200) * Math.random(), //left
      Math.random() * 1000, // timeBetweenSteps
      skeletonCount++
    );
    $('.scaryMode').append(skeleton.$node); //display on webpage
    window.dancers.push(skeleton)
  });

  //this button will add a witch onto dance floor
  $('.addWitchButton').on('click',function(event){
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var witch = new dancerMakerFunction(
      ($("body").height() - 200)  * Math.random(), //top
      ($("body").width() -200) * Math.random(), //left
      Math.random() * 1000, // timeBetweenSteps
      witchCount++
    );
    $('.scaryMode').append(witch.$node); //display on webpage
    window.dancers.push(witch);
  });

    //this button will add a ghost onto dance floor
    $('.addGhostButton').on('click',function(event){
      var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
      var dancerMakerFunction = window[dancerMakerFunctionName];
      var ghost = new dancerMakerFunction(
        ($("body").height() - 200)  * Math.random(), //top
        ($("body").width() -200) * Math.random(), //left
        Math.random() * 1000, // timeBetweenSteps
        ghostCount++
      );
      $('.scaryMode').append(ghost.$node); //display on webpage
      window.dancers.push(ghost);
    });

    //you have to use document since we are loading contents dynamicaally!
    $(document).on('click', 'img', function () {
      var selectedID = "#"+this.id;
      $(selectedID).animate({
        height: '+=100px',
        width: '+=100px'
      }).animate({
        height: '-=100px',
        width: '-=100px'
      });
    });

    //line them up
    $('.lineUpButton').on('click',function(event){
      var halfRoom = Math.floor(window.dancers.length/2);
      var leftLocation_x = Math.floor($('body').width()/2)-500;
      var leftLocation_y = 50;
      var rightLocation_x = Math.floor($('body').width()/2)+400;
      var rightLocation_y = 50;
      for(var i= 0; i< window.dancers.length; i++) {
        if(i > halfRoom){
          var newLocation = 'top: '+rightLocation_y.toString()+'px; left: '+rightLocation_x.toString()+'px;';
          window.dancers[i].$node.attr("style",newLocation);
          //update location
          rightLocation_y = rightLocation_y + 60;
          rightLocation_x = rightLocation_x + 40;
        }else{
          var newLocation = 'top: '+leftLocation_y.toString()+'px; left: '+leftLocation_x.toString()+'px;';
          window.dancers[i].$node.attr("style",newLocation);
          //update location
          leftLocation_y = leftLocation_y + 60;
          leftLocation_x = leftLocation_x - 40;
        }

      }
    });

    //terrorMode




});

