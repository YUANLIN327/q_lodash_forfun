var _  =require("lodash");
var q = require("q");
var mongoose = require("mongoose");

var aobj={
    name:"Lin Yuan 1",
    age:25
};
var bobj={
    name:"Lin Yuan 1",
    age:25
};
var cobj={
    name:"Lin Yuan 3",
    age:27
};


var objary=[aobj,bobj,cobj];

var ary1=[2,3,4,5,2,3,1,5,'asdasd','asd12dsd','lin'];
var ary2 = [2,3,'lin'];
var ary3=_.difference(ary1,ary2);

var users = [
  "asdasd","asdasd","asdasd","asdasd","asdasd1","asdasd2"
];

var result =_.sortBy(_.countBy(users));

// console.log(result);
// console.log(_.findLastKey(result));

var allTypesArray = ["4", "4", "2", "2", "2", "6", "2", "6", "6"];
var map = allTypesArray.reduce(function (p, c) {
    p[c] = (p[c] || 0) + 1;
    return p;
}, {});
var newTypesArray = Object.keys(map).sort(function (a, b) {
    return map[a] < map[b];
});

var aryPairs = _.toPairs(map);
console.log(_.sortBy(aryPairs,function(pair){return -pair[1] }));

var sample=[
    {"user":"a",value:1},
    {"user":"b",value:1},
    {"user":"a",value:1},
    {"user":"c",value:1},
    {"user":"a",value:1}
];

