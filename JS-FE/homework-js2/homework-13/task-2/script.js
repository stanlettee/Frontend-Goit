const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );


  const promise = new Promise((res) => {
    if (updatedUsers){
        res(updatedUsers)
    }
  })
    return promise

};
const logger = updatedUsers => console.table(updatedUsers);

/*
 * Зараз працює так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);
// ​
/*
 * Повинно працювати так
 */
console.log(users)
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);