//Creating the Promise
const PromiseOne  = new Promise(function(resolve, reject){
    //Async Task 
    setTimeout(function(){
        console.log('Async Task is completed')
        resolve();
    }, 1000)
})
PromiseOne.then(function(){
    console.log('Promise consumed')
})
//=================================

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task completed');
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})
//===================================

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "Chai", email: "xyz@gmail.com"})
    },1000)
})
PromiseThree.then(function(user){
    console.log(user)
})

