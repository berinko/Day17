const _ = require('lodash');

const users = [
    { firstName: "John", lastName: "Doe", age: 24, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];
function getUsers() {
    var output = [];
    for ( let i = 0; i < users.length; i++ ) {
        console.log(users[i]);
    }
    console.log(output);
    return output;
}
function findUser(lastName, gender) {
    try{
        var user = _.users(lastName, gender);
        var iFindUser = user.firstName + " " + user.lastName + " is " + user.age + ", " + user.gender;
        console.log(iFindUser);
        return iFindUser;
    } catch (error) {
        error = "Cannot read property 'firstName' of undefined";
        console.log(error.message);
        return error.message;

    }
}
console.log(getUsers());
getUsers();
findUser(users);
module.exports = findUser;