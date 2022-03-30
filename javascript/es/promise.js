let myThbs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('THBS');
        
    }, 2000);
});
myThbs.then(
    (sucess) => {
        console.log(`I am in  success call back promise ${sucess}`);
    },
    (error) => {
        console.log(`I am  in reject call back promise ${error}`);
    });

   
 


