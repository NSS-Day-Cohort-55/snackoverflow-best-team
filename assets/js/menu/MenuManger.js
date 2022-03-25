const apiURL = "http://localhost:8088";

export const getFoods = () => {
    return fetch(`${apiURL}/foods`)
    .then(response => response.json())
}

export const getApps = () => {
    return fetch(`${apiURL}/foods`)
    .then(res => res.json())
    .then(data => data.filter(item => item.menuId === 3))
}

export const getLunch = () => {
    return fetch(`${apiURL}/foods`)
    .then(res => res.json())
    .then(data => data.filter(item => item.menuId === 1))
}

export const getDesserts = () => {
    return fetch(`${apiURL}/foods`)
    .then(res => res.json())
    .then(data => data.filter(item => item.menuId === 4))
}

export const getDrinks = () => {
    return fetch(`${apiURL}/foods`)
    .then(res => res.json())
    .then(data => data.filter(item => item.menuId === 2))
}