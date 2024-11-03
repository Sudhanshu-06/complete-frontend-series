// const fruits= ["apple", "orange", "lime", "lichi","banana" ];


// for of loop
// for(const fruit of fruits){
//     console.log(fruit);
// }

// fruits.forEach(function(fruit){
//     console.log(fruit);
// })

// fruits.forEach((fruit)=>{
//     console.log(fruit);
// })


//------ Map ------

// const months=["January", "Feburary", "March", "April", "May",];

// const Months= months.map((month,index)=>{
//     console.log(index+1,month);
//     return month.toLowerCase()
// })

// -----filter-----

// const filterMonths=["January", "Febuary", "March", "April", "May",];

// const Filter= months.filter((month,index)=>{
//     console.log(month);
//     // console.log(month.length <=5);
//     // return month.length >=5;
//     return month.includes('a')
// })

// const student=[{
//     name:'Sudhanshu',
//     age:'24',
// },
//     {
//     name:'Akash',
//     age:'23',
//     },
//     {
//     name:'Rahul',
//     age:'25'
//     }
// ]

// const studentFilter=student.filter((student)=>{
//     // console.log(student.age);
//     return student.age >=24;
    
// })

// const studentFilter1=student.filter((student)=>{
//     // console.log(student.age);
//     return student.age >=24;
    
// }).map((student)=>{
//     return student.name;
// })


// Reduce

    const nums=[1,2,3]
    const sum =nums.reduce((acc,curr)=>{
        console.log(acc,curr);
        return acc+curr;


    },0)
