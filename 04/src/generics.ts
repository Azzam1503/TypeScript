const score: Array<number> = []

const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val :any ): any{
    return val
}

function identityThree<t>(val: t): t{
    return val
}

identityThree(3)
identityThree("Hey")

function getSerchProducts<T>(products: T[]): T{
    return products[3]
}

const moreProducts = <T>(products: T[]): T =>{
    const index = 5
    return products[index]
}