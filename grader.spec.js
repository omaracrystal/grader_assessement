var grader = require('./grader');

// tests!
describe('Letter Grader', function() {

  it("returns a letter grade based on number score", function(){
    expect(grader.letterGrader(105)).toEqual("A+");
    expect(grader.letterGrader(99)).toEqual("A+");
    expect(grader.letterGrader(95)).toEqual("A");
    expect(grader.letterGrader(90)).toEqual("A-");
    expect(grader.letterGrader(89)).toEqual("B+");
    expect(grader.letterGrader(85)).toEqual("B");
    expect(grader.letterGrader(80)).toEqual("B-");
    expect(grader.letterGrader(79)).toEqual("C+");
    expect(grader.letterGrader(75)).toEqual("C");
    expect(grader.letterGrader(70)).toEqual("C-");
    expect(grader.letterGrader(69)).toEqual("D+");
    expect(grader.letterGrader(65)).toEqual("D");
    expect(grader.letterGrader(60)).toEqual("D-");
    expect(grader.letterGrader(59)).toEqual("F");
  });

});


describe('Average Score', function() {

  it("returns the average from an array of numbers", function(){
    expect(grader.averageScore([90, 95, 87, 60])).toEqual(83);
    expect(grader.averageScore([74, 85, 79, 86])).toEqual(81);
  });

});


describe('Median Score', function() {

  it("returns the median from an array of numbers with odd length", function(){
    expect(grader.medianScore([52, 80, 80, 86, 94])).toEqual(80);
  });

  it("returns the median from an array of numbers with odd length", function(){
    expect(grader.medianScore([74, 85, 79, 86])).toEqual(82);
  });

});


describe('Mode Score', function() {

  it("returns the mode from an array of numbers", function(){
    expect(grader.modeScore([82, 92, 75, 91, 92, 92, 89, 95, 95, 100, 86])).toEqual([92]);
    expect(grader.modeScore([54, 75, 98, 75, 86, 75, 93])).toEqual([75]);
  });

  it("returns more than one mode from an array of numbers", function(){
    expect(grader.modeScore([82, 92, 75, 91, 92, 92, 89, 95, 95, 95, 100, 86])).toEqual([92, 95]);
    expect(grader.modeScore([52, 52, 98, 98, 79, 86, 79, 93])).toEqual([52, 79, 98]);
  });

});

