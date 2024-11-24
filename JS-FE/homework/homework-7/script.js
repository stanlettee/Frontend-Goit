// 1

let list1 = [1,2,3];
list1[1] = 10;
console.log(list1)

// 2

let list2 = ['hello', 'my', 'best'];
list2[list2.length] = 'friend';
console.log(list2)

// 3

const list3 = [13, 26, 52];
let sum = 0;
for (let i = 0; i < list3.length; i++){
    sum += list3[i]
}

console.log(sum)

// 4

const list4 = [5, 10, 20, 40, 80];
for (let i = 0; i < list4.length; i++){
    console.log(list4[i])
}

// 5

const list5 = ['cucumber', 'tomato', 'apple', 'strawberry', 'pear'];
for (let i = 0; i < list5.length; i++){
    if (list5[i].length > 5){
        console.log(list5[i])
    }
}

// 6

const list6 = [90, 33, 15, 48, 12, 67, 23, 89, 6, 37];
let bNum = list6[0]
for (let i = 0; i < list6.length; i++){
    if (list6[i + 1] > bNum){
        bNum = list6[i + 1]
    }
}
console.log(bNum)

// 7

const list7 = [90, 33, 15, 48, 12, 67, 23, 89, 6, 37];
for (let i = 0; i < list7.length; i++){
    if (list7[i] % 2 === 0){
        console.log(list7[i])
    }
}