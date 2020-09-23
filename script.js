
function start(){
    let toppings = document.getElementsByName('topping')
    for(let i=0; i<toppings.length; i++){
        toppings[i].disabled=true
    }
    let small = document.querySelector('#small')
    let medium = document.querySelector('#medium')
    let large = document.querySelector('#large')

    small.disabled=true
    medium.disabled=true
    medium.checked=true
    large.disabled=true
}


function count(){
    let pizza1 = document.querySelector('#pizza1')
    let pizza2 = document.querySelector('#pizza2')
    let pizza3 = document.querySelector('#pizza3')

    let small = document.querySelector('#small')
    let medium = document.querySelector('#medium')
    let large = document.querySelector('#large')

    let getPrice = document.querySelector('#price')
    let toppings = document.getElementsByName('topping')

    let avocado = toppings[0]
    let broccoli = toppings[1]
    let onions = toppings[2]
    let zucchini = toppings[3]
    let lobster = toppings[4]
    let oyster = toppings[5]
    let salmon = toppings[6]
    let tuna = toppings[7]
    let bacon = toppings[8]
    let duck = toppings[9]
    let ham = toppings[10]
    let sausage = toppings[11]


    let pizzaPrice = 0

    if (pizza1.checked){
        pizzaPrice=8
        disable([lobster,oyster,salmon,bacon,duck,sausage])
        enable([avocado,broccoli,onions,zucchini,tuna,ham])

    } else if(pizza2.checked){
        pizzaPrice=10
        disable([avocado,tuna,duck,sausage])
        enable([broccoli,onions,zucchini,lobster,oyster,salmon,bacon,ham])

    } else if(pizza3.checked){
        pizzaPrice=12
        disable([avocado, lobster, oyster, salmon])
        enable([broccoli,onions,zucchini,tuna,bacon,duck,ham,sausage])
    } 

    small.disabled=false
    medium.disabled=false
    large.disabled=false

    if (small.checked){
        pizzaPrice=pizzaPrice-1
    } else if(medium.checked){
        pizzaPrice=pizzaPrice
    } else if(large.checked){
        pizzaPrice=pizzaPrice+2
    }

    let toppingPrice = 0
    for(let i=0; i<4; i++){
        if(toppings[i].checked==true){
            toppingPrice++
        } 
    }
    for(let i=4; i<8; i++){
        if(toppings[i].checked==true){
            toppingPrice+=2
        } 
    }
    for(let i=8; i<12; i++){
        if(toppings[i].checked==true){
            toppingPrice+=3
        } 
    }
    


    function disable(toppings){
        toppings.forEach(topping => {
            topping.disabled=true
            topping.checked=false
        });
    }

    function enable(toppings){
        toppings.forEach(topping => {
            topping.disabled=false
        })
    }

    getPrice.innerHTML = pizzaPrice+toppingPrice
}