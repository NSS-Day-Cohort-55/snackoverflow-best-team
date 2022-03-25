const apiURL = "http://localhost:8088";

export const getFoods = () => {
    return fetch(`${apiURL}/foods`)
        .then(response => response.json())
}

export const getApps = () => {
    return fetch(`${apiURL}/foods`)
        .then(res => res.json())
        .then(data => data.filter(item => item.menuId === 3))
        .then(app => app.sort(function (a, b) {
            return a.price - b.price
            
        }))
}

export const getLunch = () => {
    return fetch(`${apiURL}/foods`)
        .then(res => res.json())
        .then(data => data.filter(item => item.menuId === 1))
        .then(lunch => lunch.sort(function (a, b) {
            return a.price - b.price
            
        }))
}

export const getDesserts = () => {
    return fetch(`${apiURL}/foods`)
        .then(res => res.json())
        .then(data => data.filter(item => item.menuId === 4))
        .then(dessert => dessert.sort(function (a, b) {
            return a.price - b.price
            
        }))
}

export const getDrinks = () => {
    return fetch(`${apiURL}/foods`)
        .then(res => res.json())
        .then(data => data.filter(item => item.menuId === 2))
        .then(drink => drink.sort(function (a, b) {
            return a.price - b.price
            
        }))
}