console.log("hello world");
var User = /** @class */ (function () {
    function User(name, password, age) {
        this.name = name;
        this.password = password;
        this.age = age;
    }
    User.prototype.getPassword = function () {
        return this.password;
    };
    return User;
}());
var user2 = new User("Name", "qwerty", 12);
console.log(user2.age);
function varType(arg) {
    return arg;
}
var type1 = varType(12);
function genericType(arg) {
    return "yhis is my type  variable " + arg.toString;
}
var gent = genericType("23");
console.log(gent);
var gent1 = genericType(true);
console.log(gent1);
var video = { id: "12", name: "Video name" };
console.log(video.id);
