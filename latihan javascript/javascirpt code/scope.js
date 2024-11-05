var i = 2 //var ini disebut global scope/window scope
var a = 1

function test () {
    //name conflict
    var a = 3
    console.log (a);
}
test()
console.log (a)
//console.log (b); b is not defined