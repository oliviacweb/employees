class Employee {
  constructor(name) {
    this.name = name;
    this.personality = 'helpful';
    this.monthsOfEmployment = 0;
    this.onboarding = true;
    this.onCall = name.length < 6;
  }

  work() {
    this.monthsOfEmployment += 4;
    if(this.monthsOfEmployment >= 6) {
      this.onboarding = false;
    }

  }

}
module.exports = Employee;
