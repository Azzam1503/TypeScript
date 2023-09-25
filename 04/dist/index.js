"use strict";
console.log("working fine");
// class User{
//     email: string
//     name: string
//     private city: string = ""
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._CourseCount = 1;
        this.city = "Delhi";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._CourseCount;
    }
    set courseCount(count) {
        this._CourseCount = count;
    }
}
const he = new User("he@co", "hee");
// he.city = "delhi" 
console.log(he.email);
console.log(he.email);
console.log(he.courseCount = 5);
console.log(he.courseCount);
console.log(he.courseCount);
