interface Circle{
    Kind: "circle",
    radius: number
}

interface Square{
    Kind: "square"
    side: number
}

interface rectangle{
    Kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square

function getTrueShape(shape: Shape){
    if(shape.Kind === "circle"){
        return Math.PI * shape.radius
    }

    return shape.side * shape.side
}