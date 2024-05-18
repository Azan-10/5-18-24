// you can use "any" data type then you woludnt find any error but if you use unknown data type you need to declare " as data type " any dosent give you error so use unknown because its safer 
var num1 = "18";
var result = num1;
// tis will not convert value this "as number" just change data type  " the data type of this will be string not a number "
console.log(result);
// function and arguemnt  > rest parameter
function invite(host) {
    var guest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        guest[_i - 1] = arguments[_i];
    }
    console.log(guest.join(" | "));
}
invite("hamza", "ali", "aziz");
function add(arg1, arg2) {
    return arg1 + arg2;
}
console.log(add(22, "23"));
