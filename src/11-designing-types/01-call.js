"use strict";
function callPoly(f, ...args) {
    return f(...args);
}
function fill(length, value) {
    return Array.from({ length }, () => value);
}
callPoly(fill, 10, 'a');
