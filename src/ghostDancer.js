var makeGhostDancer = function(top, left, timeBetweenSteps) {
  //call dancer
  makeDancer.call(this, top, left, timeBetweenSteps);
  //make sure to change class name to inherit appropraite CSS properties
  this.$node.attr("class","ghostDancer");
  this.$node.prepend('<img id="ghost" src="halloween/ghost.gif" width="150" height="170" />');
};

//set up prototypes
makeGhostDancer.prototype = Object.create(makeDancer.prototype);

//set up constructor
makeGhostDancer.prototype.constructor = makeGhostDancer;

//makeGhostDancer.prototype.step >> points to makeDancer.step
//save old step function before over writing it
makeGhostDancer.prototype.oldStep = makeGhostDancer.prototype.step;

//over writes makeDancer.step
makeGhostDancer.prototype.step = function() {
  this.oldStep();
  //this.$node.toggle();
};

