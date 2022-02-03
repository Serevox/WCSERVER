module.exports = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullname = function () {
        return this.firstName + ' ' + this.lastName;
    }
}
/*
Name: Noie Glenn Manoy
Date: February 2, 2022
Section: WD 201
*/