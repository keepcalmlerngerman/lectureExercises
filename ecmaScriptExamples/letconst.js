let x = 10;
var y = 10;
{
    let x = 5;
    var y = 5;
    {
        let x = 2;
        var y = 2;
        console.log("x: " + x);
        console.log("y: " + y);
        // Output:
        // x: 2
        // y: 2
    }
    console.log("x: " + x);
    console.log("y: " + y);
    // Output:
    // x: 5
    // y: 2
}

console.log("x: " + x);
console.log("y: " + y);
// Output:
// x: 10
// y: 2
