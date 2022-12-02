let search = document.getElementById('search')
let minus = document.getElementById('minus')
let add = document.getElementById('addition')
let check = document.getElementById('check')
let heart = document.getElementById('love')
let con = document.getElementById('content')
let list = document.getElementById('cont')
let tprice = document.getElementById('total')
let remm = document.getElementById('remo')


var num = 0;
var total = 0
list.innerHTML= ' '

let products= ['Underpants:6.99',  'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99']
for(product of products){
    let prod = product.split(':')
    let names = prod[0]
    let prices = prod[1]
    let price = Number(prices)
    total+=price
    let itemText = `${names}-$${price}`
    let listItem = document.createElement('li')
    listItem.textContent = itemText
    list.appendChild(listItem)
  
}
tprice.textContent =`$${total.toFixed(2)}`


function remove(){
  if(itemText !== " "){
    products.pop()
  }
}

function hrt(){
    if(heart.style.color === 'white'){
        heart.style.color = 'red'
    }else{
        heart.style.color = 'white'
    }
}


function addd(){
 let numm = ++num
 search.innerHTML = Number(numm)

}


function sub(){
    let nom = --num
    search.innerHTML= Number(nom)
  
  
   if(nom > 1){
    minus.disabled = false
   }else{
    minus.disabled = true

   }
   

}
minus.addEventListener('click', sub)
add.addEventListener('click', addd)
heart.addEventListener('click', hrt)
remm.addEventListener('click', remove)




