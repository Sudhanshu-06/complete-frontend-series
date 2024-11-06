const evenNumbers =[0,2,3,4,6,8]


// some
// const result = evenNumbers.some((num,i)=>{
//     if(num%2===1){
//         console.log(i);
//     }
//     return num%2 ===1
// })


// Every

const result = evenNumbers.every((num,i)=>{
         if(num%2===1){
             console.log(i);
         }
        return num%2 ===1
     })

