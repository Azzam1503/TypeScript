"use strict";
function getTrueShape(shape) {
    if (shape.Kind === "circle") {
        return Math.PI * shape.radius;
    }
    return shape.side * shape.side;
}
