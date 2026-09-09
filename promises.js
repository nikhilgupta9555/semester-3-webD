
const getpromise = (id) => {
   return new Promise((resolve, reject) => {
      console.log(" hello nikhil", id);
      resolve(id);
      // reject(id);
   }); 
};
let promise = getpromise(123);
promise.then (() => {
   console.log("promise is fulfilled");
});

promise.catch(() => {
   console.log("promise is rejected");
});
