export const getOrders = () => {
    return fetch("http://localhost:8088/orders?_expand=user")
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
    getOrders()
    .then(allOrders => {
        allOrders.map(orderObject => {
            htmlElement += `<h3>${orderObject.user.name}</h3>`
        })
        contentTarget.innerHTML = htmlElement;
    })
}