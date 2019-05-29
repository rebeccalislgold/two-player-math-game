// This class represents all that is common between Student and Mentor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact, yob) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.yob = yob;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }

  full_bio() {
    return `My name is ${this.name}, my quirky fact is ${this.quirkyFact}, I am in cohort ${this.cohort}, and I am ${2019 - this.yob} years old`;
  }
}

class Student extends Person {
    // stays in Student class since it's specific to students only
    enroll(cohort) {
      this.cohort = cohort;
    }
  }
  
  class Mentor extends Person {
    // specific to mentors
    goOnShift() {
      this.onShift = true;
    }
  
    // specific to mentors
    goOffShift() {
      this.onShift = false;
    }
  }

 let student1 = new Student('Rebecca','likes softball','1985');
 student1.enroll("April 29th cohort");
 
 console.log(student1.full_bio());
 console.log(student1);

//  let mentor1 = new Mentor('Erik', )