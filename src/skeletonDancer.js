var makeSkeletonDancer = function(top, left, timeBetweenSteps,id) {
  //call dancer
  makeDancer.call(this, top, left, timeBetweenSteps,id);
  //make sure to change class name to inherit appropraite CSS properties
  this.$node.attr("class","skeletonDancer");
  var uniqueID = "skeleton_"+id.toString();
  this.$node.attr("id",uniqueID);
  this.$node.attr("src","halloween/skeleton_ultimate_move.gif");
  this.$node.attr("width","200");
  this.$node.attr("height","225");

};

//set up prototypes
makeSkeletonDancer.prototype = Object.create(makeDancer.prototype);

//set up constructor
makeSkeletonDancer.prototype.constructor = makeSkeletonDancer;

//makeSkeletonDancer.prototype.step >> points to makeDancer.step
//save old step function before over writing it
makeSkeletonDancer.prototype.oldStep = makeSkeletonDancer.prototype.step;

//over writes makeDancer.step
makeSkeletonDancer.prototype.step = function() {
  this.oldStep();
  //this.$node.toggle();
};

