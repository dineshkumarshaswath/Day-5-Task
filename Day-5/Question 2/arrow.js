// 2. Do the below programs in arrow functions.

//A.Print odd numbers in an array

var oddnumber = () => {
    var a = [3, 4, 5, 69, 25];
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            console.log(a[i]);
        }
    }
}
oddnumber();

//B.Convert all the strings to title caps in a string array

const caps = () => {
    let a = "i am dineshkumar".split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
     .join(' ');
    console.log(a);
}
caps();

//C.Sum of all numbers in an array

var sum = () => {
    var a = [1, 2, 3, 4, 5];
    var Sum = 0;
    for (let i = 0; i < a.length; i++) {
        Sum += a[i];
    }
    console.log(Sum);
}
sum();


//D.Return all the prime numbers in an array

var prime = () => {
    var arr = [ 2, 3, 4, 5,13,17.23];
    var a = [];
    const prime = function () {
        for (var x of arr) {
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

    }(arr)
    console.log(prime);
}
prime();


//E.Return all the palindromes in an array

var palindrome = () => {
    var a = ["mom", "dad", "banana","121","234"]
    for (i = 0; i < a.length; i++) {
        var b = a[i].split("").reverse().join("")
        if (a[i] == b)
            console.log(a[i])
    }
}
palindrome();



