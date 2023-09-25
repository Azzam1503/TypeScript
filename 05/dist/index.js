"use strict";
function detectTypes(val) {
    if (typeof val == "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide id");
        return;
    }
    return id.toLowerCase();
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return isAdmin;
    }
    return false;
}
