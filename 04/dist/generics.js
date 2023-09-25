"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("Hey");
function getSerchProducts(products) {
    return products[3];
}
const moreProducts = (products) => {
    const index = 5;
    return products[index];
};
