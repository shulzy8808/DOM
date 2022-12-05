let search = document.getElementById('search')
let span = document.getElementById('numb')
let minus = document.getElementById('minus')
let add = document.getElementById('addition')
let check = document.getElementById('check')
let heart = document.getElementById('love')
let con = document.getElementById('content')
let lists = document.getElementById('cont')
let tprice = document.getElementById('total')
let remm = document.getElementById('remo')
let sear = document.getElementById('sear')

var num = 0;
var total = 0
list.innerHTML= ' '


let products= ['Underpants:6.99',  'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];
for(product of products){
    let prod = product.split(':')
    let span = document.createElement('span')
    let list = document.createElement('li')
    let removebtn = document.createElement('button')
    let names = prod[0]
    let prices = prod[1]
    let price = Number(prices)
    span.textContent = `${names} : $${price}`
        total+= price
   
    removebtn.textContent = "Remove"
    list.appendChild(span)
    list.appendChild(removebtn)
    lists.appendChild(list)
    removebtn.addEventListener('click', () => 
            list.remove()
    )
    tprice.textContent = `${total.toFixed(2)}`
}






// function searchhh(){
//          search.value = ' '
//         search.focus();
//         let goods= search.value.toLowerCase()
         
//         let spanList = document.createElement('span')
//         let removebtn = document.createElement('button')
//         let list = document.createElement('li')
       
//         spanList.textContent = goods
       
//         list.appendChild(spanList)
//         list.appendChild(removebtn)

//         lists.appendChild(list)
//         for(product of products){
//                 let splitItem = product.split(':')
//             if(splitItem[0].toLowerCase === goods){
//                 spanList.textContent = `${splitItem[0]} : ${splitItem[1]} `
//             }
//             }
                             
        
//         }


// for(product of products){
//     let prod = product.split(':')
//     let names = prod[0]
//     let prices = prod[1]
//     let price = Number(prices)
//     total+=price
//     let itemText = `${names}-$${price}`
//     let listItem = document.createElement('li')
//     listItem.textContent = itemText
//     list.appendChild(listItem)
  
// }
// tprice.textContent =`$${total.toFixed(2)}`



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
// remm.addEventListener('click', remove)
sear.addEventListener('click', searchhh)
