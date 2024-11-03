function sayHi(){
    console.log("hi");
}
// document show the elemnet in html format
// console.dir()- shows that in object format

const allImages= document.getElementsByTagName('img') 

// document.childeren[0].childeren[1]
// document.body
// document.body.children
// document.body.children[0]
// document.body.children[0].innerHTML='Sudhanhsu'
// document.body.children[0].innerHTML='<i>Singh</i>'
// document.body.children[0].innerText='Singh'
// document.body.children[4].src=img source


// const cssImg=document.getElementsByClassName('css-image')
// const cssImg= document.getElementById('abcd')

// let cssImg = document.querySelector('.abcd')
// let cssImg = document.querySelector('#abcd')

// let cssImg = document.querySelectorAll('#abcd')
// let cssImg = document.querySelectorAll('.abcd')


// document.querySelector('h1').style.color='yellow';
// document.querySelector('h1').style.backgroundColor='aqua';


const allLinks=document.querySelectorAll('a')
// allLinks[0].style.color='green';
// allLinks[1].style.color='skyblue';
// allLinks[2].style.color='blue';
// allLinks[3].style.color='red';

// for(let i=0; i<allLinks.length; i++){
//     allLinks[i].style.color='green';
// }

for(let link of allLinks){
//     link.style.color='green';
//     link.style.textDecoration='none';
//     link.style.fontWeight=700;
//     link.style.fontFamily='sans-serif'

    link.style.cssText=`color:red;
    font-size:18px;
    font-family:cursive;
    font-weight:600;
    text-decoration:none;`
}
// link.classList.add('green-link')
// link.classList.remove('green-link')
// link.classList.toggle('green-link')


