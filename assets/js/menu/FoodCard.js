const orderButton = (food) => {
    const currentUser = sessionStorage.getItem("SOuser")
    if (currentUser){
        return `<button type="button" value ="orderButton" id="${food.id}"class="btn btn-primary">Order</button>
                <p class="menu--item--quantity">Quantity: </p>`
    } else {return ""}
}

export const FoodCard = (foodObj) => {

    if (foodObj.isVegetarian) {
        return `
    <div class="col-sm-6 g-4">
        <div class="card" id="${foodObj.id}">
        <div class="h-100">
        <img src="./assets/images/${foodObj.imageURL}" class="card-img-top" alt="${foodObj.imageURL}">
        </div>
            <div class="card-body">
                <h5 class="card-title">${foodObj.name}</h5>
                <p class="card-text">${foodObj.description}</p>
                <img src="./assets/images/icon-veg.png">
                <p>Price: $${foodObj.price}</p>

                ${orderButton(foodObj)}
            </div>
        </div>
    </div>
    `
    } else {
 
        return `
        <div class="col-sm-6 g-4">
        <div class="card">
            <div class="h-100">
            <img src="./assets/images/${foodObj.imageURL}" class="card-img-top" alt="${foodObj.imageURL}">
            </div>
                <div class="card-body">
                    <h5 class="card-title">${foodObj.name}</h5>
                    <p class="card-text">${foodObj.description}</p>
                    <p>Price: $${foodObj.price}</p>
            
                     <button type="button" value ="orderButton" id="${foodObj.id}"class="btn btn-primary">Order</button>
            
                    <p class="menu--item--quantity">Quantity: </p>
                </div>
            </div>
        </div>
        `
    }
}

document.addEventListener('click', event => {
    if(event.target.value === "orderButton") {
        
    } 
})