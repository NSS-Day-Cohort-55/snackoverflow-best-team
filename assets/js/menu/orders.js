
document.addEventListener("click", event => {
    if (event.target.value === "orderButton"){
        getOrderFoods()
        .then(orders => orders.find(o => o.food.id === event.target.id))
        .then(foundItem => )
    }
})


export const getOrderFoods = () => {
    return fetch("http://localhost:8088/orderFoods?_expand=food&&_expand=order")
    .then(response => response.json())
}

export const createOrder = (newOrder) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOrder)
    }
}

export const makeOrderList = () => {
    const contentTarget = document.querySelector("main")
    let htmlElement = ''
    getOrderFoods()
    .then(allOrders => {
        allOrders.map(orderObject => {
            htmlElement += `<h3>${orderObject.food.name}</h3>
                            <img src="../../images/${orderObject.food.imageURL}">
                            <p>Price: ${orderObject.food.price}</p>
                            <p>Notes: ${orderObject.order.notes}</p>
                            <p>Time Placed: ${orderObject.order.timestamp}</p>
                            <p>User Id: ${orderObject.order.userId}</p>`
        })
        contentTarget.innerHTML = htmlElement;
    })
}