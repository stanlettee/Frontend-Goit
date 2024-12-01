// 1

// for

const friends = ['Jack', 'Peter', 'Matthew', 'John'];
let string = ' ';
for (let i = 0; i < friends.length; i++){
    string += friends[i]
    if (i < 3){
        string += ', '
    }
}
console.log(string)

// join

string = friends.join(', ')
console.log(string)

// 2

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5'
]

// 3

const cardToRemove = 'Карточка-3';
console.log(cards.splice(cards.indexOf(cardToRemove), 1))
console.log(cards)

// 4

const cardInsert = 'Карточка-6';
cards.splice(4, 0, cardInsert)
console.log(cards)

// 5

const cardToUpdate = 'Карточка-4'
cards.splice(2, 1, cardToUpdate);
console.log(cards)

