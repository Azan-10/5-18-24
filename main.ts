// you can use "any" data type then you woludnt find any error but if you use unknown data type you need to declare " as data type " any dosent give you error so use unknown because its safer 

let num1: unknown = "18";
let result: number = num1 as number 
// tis will not convert value this "as number" just change data type  " the data type of this will be string not a number "
console.log(result)
// function and arguemnt  > rest parameter

function invite (host:string,...guest:string[])/// ... use as rest parameter
{
    console.log (guest.join(" | "))
    

}
invite("hamza","ali","aziz")
// overload function 
function add (arg1:string,arg2:string):string;
function add (arg1:number,arg2:number):number;
function add (arg1:number,arg2:string):string;
function add (arg1:any,arg2:any){
    return arg1 + arg2
}
console.log(add(22,"23"))
