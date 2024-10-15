function rollnumber(num,delay,nextroll){
    setTimeout(() => {
        console.log("roll number is",num);
        
        if (nextroll) nextroll();
    },delay);

}
rollnumber(12121,1000,()=>{
    rollnumber(12321,2000,()=>{
        rollnumber(12345,3000,()=>{
            rollnumber(12521,4000);
        });
    });
});
function getroll(num,delay){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log("roll.no. is",num);
            resolve("done");

        },delay)

    });

}
getroll(1,1000).then(()=> {
    getroll(2,2000).then(()=> {
        getroll(3,3000);
    });
});