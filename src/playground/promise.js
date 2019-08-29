const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve({
         name: 'Nathan',
         age: 30
      });
      reject('Some went wrong');
   }, 1500);
});

console.log('before');

promise.then((data) => {
   console.log('1', data);

   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve('This is my other promise');
      }, 1500);
   });
}).then((str) => {
   console.log('does this run?', str);
}).catch((err) => {
   console.log('error: ', err)
});

console.log('after');