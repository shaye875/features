import {array} from "./list.js";

function returnList(...l){
    return [l,array];
}

console.log(returnList(3,4,5));