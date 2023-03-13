"use strict";

let users = [
    {
        name: "Chinara",
        surname: "Ibadova",
        age: 22
    },
    {
        name: "Roya",
        surname: "Meherremova",
        age: 26
    },
    {
        name: "Konul",
        surname: "Ibrahimova",
        age: 26
    },
    {
        name: "Jale",
        surname: "Abdullayeva",
        age: 18
    }

]
// console.log(users);
// function getUsersNameByStr(str){
//     setTimeout(() => {
//         let filteredUsers = users.filter(u=>u.name.includes(str));
//         console.log(filteredUsers);
//     }, 3000);

// }
// getUsersNameByStr("a")
// let ul = document.querySelector("ul");

// function getUsers(datas) {
//     setTimeout(() => {
//         let str = ""
//         datas.forEach(user => {
//             str += `<li class="list-group-item"><span>${user.name} </span><span>${user.surname}-</span><span>${user.age}</span></li>`
//         });
//         ul.innerHTML=str
//     }, 2000);
// }

// function createUser(user,callback) {
//     setTimeout(() => {
//         users.push(user);
//         callback()
//     }, 3000);
// }
// createUser({ name: "Elekber", surname: "Hesenli", age: 20 },getUsers)

// function createUser(user) {
//     return new Promise((resolved,rejected)=>{
//         setTimeout(() => {
//             users.push(user);
//             let err = true;
//             if(!err){
//                 resolved(users)
//             }
//             else{
//                 rejected("Something went wrong")
//             }
//         }, 3000);
//     })

// }
// createUser({ name: "Elekber", surname: "Hesenli", age: 20 }).then(response=>{
//     getUsers(response)
// })
// .catch(err=>{
//     ul.innerHTML = err;
// })

// getAllPosts()
// function getAllPosts() {

//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(datas => {
//             let str = ""

//             for (const item of datas) {
//                 str += `<li data-id="${item.id}" class="list-group-item"><span>${item.id} </span><span>${item.body}-</span><span>${item.userId}</span></li>`
//             }
//             ul.innerHTML = str

//         })
// }
// function getPostById(id){
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(response => response.json())
//     .then(item => {
//         // ul.innerHTML = `<li class="list-group-item"><span>${item.id} </span><span>${item.body}-</span><span>${item.userId}</span></li>`
//         alert(item.body)
//     })
// }

// getPostById(2)

// setTimeout(() => {
//     let elems = document.querySelectorAll("li");
//     elems.forEach(elem => {
//         elem.addEventListener("click",function(){
//             let id = elem.getAttribute("data-id")
//             getPostById(id)
//         })
//     });
// }, 1000);


// async function getPostById(id){
//    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//    let item = await res.json()
//     alert(item.body)
// }

$(function () {

    $("button").click(function () {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts`, success: function (datas) {
                let str = ""
                for (const item of datas) {
                    str += `<li data-id="${item.id}" class="list-group-item"><span>${item.id} </span><span>${item.body}-</span><span>${item.userId}</span></li>`
                }
                $("ul").html(str)
            }
        })
    })
})