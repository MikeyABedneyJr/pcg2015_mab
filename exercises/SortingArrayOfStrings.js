//SORT AN ARRAY OF STRINGS
var list = ["Dog","Cat","Zebra","Pony"];
list.sort();
console.log(list);

//SORT AN ARRAY OF OBJECTS CONTAINING A STRING
var object_list = [{"name":"Dog"},{"name":"Cat"},{"name":"Zebra"},{"name":"Pony"}];
object_list.sort(function(a,b){
    if(a.name > b.name){
        return 1;
    }else if(a.name < b.name){
        return -1;
    }else{
        return 0;
    }
});
console.log(object_list);