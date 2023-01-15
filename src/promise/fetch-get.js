import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
    return fetch(urlApi);
}

fetchData(`${API}/products`)
    .then((response) => response.json())
    .then((productList) => {
        console.log(productList[0]);
        return fetchData(`${API}/products/${productList[0].id}`);
    })
    .then((response) => response.json())
    .then((product) => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`);
    })
    .then((response) => response.json())
    .then((category) => console.log(category.name))
    .catch((error) => console.log(error))
    .finally(() => console.log("Finally"));
