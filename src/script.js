//  1)

const arr1 = ['apple', 'orange', 'banana', 'lemon'];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

//  2)

function display(x, secondFunction) {
    const message = secondFunction(x);

    console.log(message)
}


function secondFunction(price) {
    if (price > 50) {
        return 'price is above average'
    } else if (price < 50 && price > 20) {
        return 'price is normal'
    } else {
        return 'price is belove average'
    }
}

display(99, secondFunction);

// 3)

const arrNum = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951];

let maxNumber = arrNum[0];
for (let i = 1; i < arrNum.length; i++) {
    if (arrNum[i] > maxNumber) {
        maxNumber = arrNum[i];
    }
}
console.log(maxNumber);