//1. Do the below programs in anonymous function & IIFE

//A.Print odd numbers in an array

//Anonymous Function;

var a = [1, 2, 3, 4, 5];
var foo = function () {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            console.log(a[i]);
        }
    }
}
foo();

//IIFE Function;

var a = [1, 2, 3, 4, 5];
(function f00() {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            console.log(a[i]);
        }
    }
})
foo();

//B.Convert all the strings to title caps in a string array

//Anonymous Function;

var foo = function () {
    var a = "hi i am dineshkumar"
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    console.log(a);
}
foo();

//IIFE Function;
(function foo() {
    var a = "hi i am dineshkumar"
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    console.log(a);
})
foo();

//C.Sum of all numbers in an array

//Anonymous Function;

var b = [200, 4, 5, 6];
var Sum = 0;
var foo = function () {
    for (let i = 0; i < b.length; i++) {
        Sum += b[i];
    }
    console.log(Sum);
}
foo();

//IIFE Function;

var b = [13, 34, 5, 35];
var Sum = 0;
(function foo() {
    for (let i = 0; i < b.length; i++) {
        // var Sum=0;
        Sum += b[i];
    }
    console.log(Sum);
})
foo();


//D.Return all the prime numbers in an array

//Anonymous Function;

var number = [12, 23, 4, 21, 67];
var a = [];
var too = function () {
    var prime = function () {
        for (var x of number) {
            var b = 0;
            for (var i = 2; i <= x / 2; i++) {
                if (x % i == 0) {
                    b = 1;
                    break;
                }
            }
            if (b == 0) {
                a.push(x)
            }
        }
        return a

    }(number)
    console.log(prime);
}
too();

//IIFE Function;

var number = [12, 23, 4, 21, 67];
var a = [];
(function too() {
    var prime = function () {
        for (var x of number) {
            var b = 0;
            for (var i = 2; i <= x / 2; i++) {
                if (x % i == 0) {
                    b = 1;
                    break;
                }
            }
            if (b == 0) {
                a.push(x)
            }
        }
        return a

    }(number)
    console.log(prime);
})
too();

//E.Return all the palindromes in an array

//Anonymous Function;

var a = ["dad", "mom", "can"];
var pali = function () {
    for (i = 0; i < a.length; i++) {
        var b = a[i].split("").reverse().join("")
        if (a[i] == b)
            console.log(a[i])
    }
};
pali();

//IIFE Function

//E.Return all the palindromes in an array

var a = ["1331", "noon", "dad"];
(function pali() {
    for (i = 0; i < a.length; i++) {
        var b = a[i].split("").reverse().join("")
        if (a[i] == b)
            console.log(a[i])
    }
});
pali();


//F.Return median of two sorted arrays of same size

//Anonymous Function


var a = [3, 7, 6, 5];
var b = [4, 8, 10, 3];
var fsort = function () {
    const median = (a, b) => {
        var c = [...a, ...b].sort((a, b) => a - b);
        const half = c.length / 2 | 0;
        if (c.length % 2) return c[half];
        return (c[half] + c[half - 1]) / 2;
    }
    console.log(median(a, b));
}
fsort();

//IIFE Function

var a = [3, 7, 6, 5];
var b = [4, 8, 10, 3];
(function fsort() {
    const median = (a, b) => {
        var c = [...a, ...b].sort((a, b) => a - b);
        const half = c.length / 2 | 0;
        if (c.length % 2) return c[half];
        return (c[half] + c[half - 1]) / 2;
    }
    console.log(median(a, b));
})
fsort();

//G.Remove duplicates from an array

//Anonymous Function;


let c = [23, 45, 6, 7, 8, 23, 7, 8];
var duplicate = function () {
    let Duplicate = [...new Set(c)];
    console.log(Duplicate);
}
duplicate();

//IIFE Function

let e = [23, 45, 6, 7, 8, 23, 7, 8];
(function duplicae() {
    let Duplicate = [...new Set(c)];
    console.log(Duplicate);
})
duplicate();

//H.Rotate an array by k times

//Anonymous Function

var nums = [5, 4, 3, 2];
var k = [2];
var rotate = function () {
    const rotatearr = (nums, k) => {
        for (let i = 0; i < k; i++) {
            nums.unshift(nums.pop());
        }
        return nums;
    }

    console.log(rotatearr(nums, k));
}
rotate();

//IIFE Function

var nums = [1, 2, 3, 4];
var k = [2];
(function rotate() {
    const rotatearr = (nums, r) => {
        for (let i = 0; i < r; i++) {
            nums.unshift(nums.pop());
        }
        console.log((nums));
    }
})
rotate();

