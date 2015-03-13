//SECONDARY SORT AN ARRAY OF OBJECTS CONTAINING A VALUE
var object_list = [{"amt": 33, "name": "z"}, {"amt": 33, "name": "a"}, {"amt": 123, "name": "w"}, {
    "amt": 1,
    "name": "e"
}];


function comp(a, b) {
    if (a.amt > b.amt) {
        return 1;
    } else if (a.amt < b.amt) {
        return -1;
    } else {                // THIS IS WHERE THE 2ND SORT BEGINS
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        } else {
            return 0;
        }
    }
}

object_list.sort(comp);

console.log(object_list);