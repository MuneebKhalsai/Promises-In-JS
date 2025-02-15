// const marks = 50;
// const result = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (marks > 70) {
//             console.log('Congrats!!!');
//             resolve('You are Passed!!')
            
//         }
//         else{
//             console.log('Sorry...');
//             reject('Yoy are Failed..')
//         }
        
//     }, 1000)
// })

// result
// .then((res)=>{
//     console.log(res)
// })

// .catch ((err)=>{
//     console.log(err)
// })


// const marks = 60;
// const result = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (marks>70) {
//             console.log('Congrats!!!');
//             resolve('Tum Pass Ho')
            
//         } else {
//             console.log('Sorry!!!');
//             reject('Yr Fail Ho Gae')
            
//         }
        
//     }, 1000);
// })

// result 
// .then((res)=> {
//     console.log(res)
// })

// .catch((err)=> {
//     console.log(err)
// })

// Promises In Function 


// function Shadi(BankBalance) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (BankBalance>200000) {
//                 console.log('Mubarak Ho!!!!');
//                 resolve('Pasia Bhut Hai')
                
//             } else {
//                 console.log('Nh Yr...');
//                 reject('Paisa Nh Hai')
//             }



//         }, 1000);
//     })
// }

// Shadi(BankBalance= 300000)
// .then((res) => {
//     console.log(res)
// })

// .catch((err) => {
//     console.log(err)
// })


// let paisa = 25000;
// let trip = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (paisa > 22000) {
//             console.log('Chalo');
//             resolve('Trip Pr Chalte Hai!!!')
            
//         } else {
//             console.log('Ny Yrr..');
//             reject('Paisa Nh Hai!!')
            
//         }
        
//     }, 1000);
// })
// trip

// .then((res) => {
//     console.log(res)
// })

// .catch((err) => {
//     console.log(err)
// })


// function mobile(paisa) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (paisa>50000) {
//                console.log('Chalo');
//                resolve('Iphone Lete Hai')
//             } else {
//                 console.log('Nh Yrr');
//                 reject('Andriod Hi Sahi Hai')
//             }
//         }, 1000);
//     })
    
// }
// mobile(paisa = 10000)
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })

// fetch() 
// .then((res) => {
//     return res.json()
// })
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })


// axios ('https://fakestoreapi.com/products')
// .then((res) => {
//     console.log(res.data)
// })
// .catch((err) => {
//     console.log(err)
// })

