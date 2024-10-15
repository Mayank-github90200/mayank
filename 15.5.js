const promise=new Promise((Resolve,reject) => {
    console.log("first");
    Resolve("promise resolved");
    reject("promise rejected");
});
promise.then(() => {
    console.log("this is my promise");

}).catch(() => {
    console.log("this is my error page")
})