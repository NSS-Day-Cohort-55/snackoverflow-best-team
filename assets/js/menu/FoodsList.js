import * as MenuManger from './MenuManger.js';
import { FoodCard } from './FoodCard.js'

export const FoodList = () => {
    const contentTarget = document.querySelector("main")
    let HTMLString;
    MenuManger.getApps()
    .then(foodArray => {

        HTMLString = `<h2>Appetizers</h2>
                      <div class="row">`
        HTMLString += foodArray.map(food => FoodCard(food)).join('')
        HTMLString += `</div>`
        contentTarget.innerHTML = HTMLString;
    })
    
    MenuManger.getLunch()
    .then(foodArray => {

        HTMLString += `<h2>Lunch</h2>
                      <div class="row">`
        HTMLString += foodArray.map(food => FoodCard(food)).join('')
        HTMLString += `</div>`
        contentTarget.innerHTML = HTMLString;
    })

    MenuManger.getDesserts()
    .then(foodArray => {

        HTMLString += `<h2>Desserts</h2>
                      <div class="row">`
        HTMLString += foodArray.map(food => FoodCard(food)).join('')
        HTMLString += `</div>`
        contentTarget.innerHTML = HTMLString;
    })

    MenuManger.getDrinks()
    .then(foodArray => {

        HTMLString += `<h2>Drinks</h2>
                      <div class="row">`
        HTMLString += foodArray.map(food => FoodCard(food)).join('')
        HTMLString += `</div>`
        contentTarget.innerHTML = HTMLString;
    })
}
