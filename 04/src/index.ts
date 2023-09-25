console.log("working fine")

// class User{
//     email: string
//     name: string
//     private city: string = ""
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }

// }

class User{

    private _CourseCount = 1
    readonly city: string = "Delhi"

    constructor(public email: string, public name: string){

    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._CourseCount
    }

    set courseCount(count: number){
        this._CourseCount = count
    }
}

const he = new User("he@co", "hee")
// he.city = "delhi" 
console.log(he.email)
console.log(he.email)

console.log(he.courseCount = 5)
console.log(he.courseCount)
console.log(he.courseCount)