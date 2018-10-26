var makeWitchDancer = function(top, left, timeBetweenSteps,id) {
  //call dancer
  makeDancer.call(this, top, left, timeBetweenSteps);
  //make sure to change class name to inherit appropraite CSS properties
  this.$node.attr("class","witchDancer");
  this.$node.attr("src","halloween/witch.gif");
  var uniqueID = "witch_"+id.toString();
  this.$node.attr("id",uniqueID);
  this.$node.attr("width","170");
  this.$node.attr("height","200");
};

//set up prototypes
makeWitchDancer.prototype = Object.create(makeDancer.prototype);

//set up constructor
makeWitchDancer.prototype.constructor = makeWitchDancer;

//makeWitchDancer.prototype.step >> points to makeDancer.step
//save old step function before over writing it
makeWitchDancer.prototype.oldStep = makeWitchDancer.prototype.step;

//over writes makeDancer.step
makeWitchDancer.prototype.step = function() {
  this.oldStep();
  //this.$node.toggle();
};
