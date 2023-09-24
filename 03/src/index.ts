console.log("Hey hey")
console.log("Hey hey")

interface User{
    Name: String,
    Id: Number
}

type newUser = {
    Name: string,
    id: number
}
function his(user : User): User{
    return {
        Name: "Johncena",
        Id: 2
    }
}

var th : User = {
    Name: "Hey",
    Id: 45
}

var ht: newUser = {
    Name:"john",
    id: 2
}

const user: string[] = ["hey"]

//Tuples
let tUser: [string,  number, boolean]

tUser = ["eee",  3, true]
