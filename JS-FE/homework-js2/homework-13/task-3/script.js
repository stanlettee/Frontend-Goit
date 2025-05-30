const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            if (canProcess) {
            res({ id: transaction.id, time: delay});
            } else {
            rej(transaction.id);
            }
        }, delay);
    })
    return promise

};
const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time} ms`);
};
const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};
/*
 * Працює так
 */

/*
 * Повинно працювати так
 */
makeTransaction({ id: 70, time: 150 })
  .then(logSuccess)
  .catch(logError);
makeTransaction({ id: 71, time: 230 })
  .then(logSuccess)
  .catch(logError);
makeTransaction({ id: 72, time: 75 })
  .then(logSuccess)
  .catch(logError);
makeTransaction({ id: 73, time: 100 })
  .then(logSuccess)
  .catch(logError);