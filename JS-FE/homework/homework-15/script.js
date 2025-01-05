// 1

const users = [
    { name: 'Mango', balance: 10000, friend: 'Jack', friendsNum: 13, skill: 'tennis'},
    { name: 'Poly', balance: 4500, friend: 'Peter', friendsNum: 11, skill: 'hockey'},
    { name: 'Jakob', balance: 8800, friend: 'Owen', friendsNum: 5, skill: 'table tennis'},
    { name: 'Alex', balance: 25000, friend: 'Peter', friendsNum: 17, skill: 'rugby'},
    { name: 'Chelsy', balance: 32000, friend: 'Owen', friendsNum: 23, skill: 'basketball'},
    { name: 'Maja', balance: 17400, friend: 'Owen', friendsNum: 32, skill: 'guitar'},
    { name: 'Peter', balance: 78200, friend: 'Nick', friendsNum: 27, skill: 'video games'},
    { name: 'Owen', balance: 44500, friend: 'Alice', friendsNum: 9, skill: 'football'},
];

console.log(users.reduce((sumBalance, user) => sumBalance + user.balance, 0))

// 2

const filteredUsers = users.filter((user) => user.friend === 'Owen')
console.log(filteredUsers.map((user) => user.name))

// 3

const sortedUsers = users.sort((a, b) => a.friendsNum - b.friendsNum)
console.log(sortedUsers.map((user) => user.name))

// 4

const userSkills = users.map((user) => user.skill)
console.log(userSkills.sort())


