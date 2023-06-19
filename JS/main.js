console.log("js file added")

const bodyTag =document.querySelector("body")
bodyTag.innerHTML += `
<section id ="groceries">
<h2>Groceries</h2>
<ul id="groceriesList"></ul>
</section>
`
let groceries =["apple", "bannan","milk","egg","bread"]
const groceriesUl =document.getElementById("groceriesList")
// for what coming from where 
for(item of groceries){
    // insertAdjacentHTML method accepts two parameters,where the HTML should be added and what HTML to add
    groceriesUl.insertAdjacentHTML("beforeend",`<li>${item}</li>`)
}
function addItem(item){
    if(item!== ""){
        let newItem = `<li>${item}</li>`
        groceriesUl.insertAdjacentHTML("afterbegin",newItem)

    }
}
// Using ceatElement and appendchild , less popular
const section=document.createElement("section")
section.id="todo"
section.innerHTML="<h2>Todo</h2>"