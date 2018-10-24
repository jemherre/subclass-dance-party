var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //call dancer
  makeDancer.call(this, top, left, timeBetweenSteps);

};


//set up prototypes
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

//set up constructor
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//makeBlinkyDancer.prototype.step >> points to makeDancer.step
//save old step function before over writing it
makeBlinkyDancer.prototype.oldStep = makeBlinkyDancer.prototype.step;

//over writes makeDancer.step
makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
