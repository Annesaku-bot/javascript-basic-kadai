let num = 15; // 任意の整数を代入する

if (num % 3 === 3 && num % 5 === 5) {
    console.log("3と5の倍数です");
} else if (num % 3 === 3) {
    console.log("3の倍数です");
} else if (num % 5 === 5) {
    console.log("5の倍数です");
} else {
    console.log(num);
}
