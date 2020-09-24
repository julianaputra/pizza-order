// This function will be executed when user
// loads the website for the first time

function start(){
    // Disable all options before user selects pizza
    let toppings = document.getElementsByName('topping')
    let sizes = document.getElementsByName('size')

    toppings.forEach(topping =>{
        topping.disabled=true
    })

    sizes.forEach(size => {
        size.disabled=true
    })

    // keep medium size checked as the default size
    sizes[1].checked=true
}

// This function will be executed when user
// makes changes to the website
function count(){

    // Select the required elements
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

    // Declare the starting price of pizza and topping
    let pizzaPrice = 0
    let toppingPrice = 0

    // Check selected pizza
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

    // After user selects the pizza, activate size option
    small.disabled=false
    medium.disabled=false
    large.disabled=false

    // Check selected size
    if (small.checked){
        pizzaPrice-=1
    } else if(medium.checked){
        pizzaPrice=pizzaPrice
    } else if(large.checked){
        pizzaPrice+=2
    }

    // Check topping price
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
    
    // function to disable topping 
    function disable(toppings){
        toppings.forEach(topping => {
            topping.disabled=true
            topping.checked=false
        });
    }

    // function to enable topping
    function enable(toppings){
        toppings.forEach(topping => {
            topping.disabled=false
        })
    }

    // Display the final price
    getPrice.innerHTML = pizzaPrice+toppingPrice
}