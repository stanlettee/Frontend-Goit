// 1 

let i = 1
while (true){
    console.log(i)
    i += 1
    if (i === 11){
        break
    }
}

// 2

for (let i = 1; i <= 20; i+=1){
    if (i % 2 !== 0){
        continue;
    }
    console.log(i)
}

// 3 

for (let i = 1; i <= 9; i+=1){
    let x = 7;
    let answer = i * x;
    console.log(`${i} * 7 = ${answer}`)
}

// 4 

const list = [1,2,3,4,5];
let i = 0;
while (i < list.length) {
    console.log(list[i])
    i++;
}

// 5

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= 9; i+=1){
    console.log(list[i])
    if (i === 6){
        break;
    }
}

// 6 

let n = Number(prompt('Enter any number'));
for (let i = 0; i < n; i+=1){
    if (i >= n){
        break;
    }
    console.log(i)
}

// 7

let i = 1;
while (i <= 20){
    if (i % 3 === 0){
        console.log(i)
    }
    i++;
}



