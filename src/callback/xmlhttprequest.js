const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi, callback) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", urlApi, true);
    xhr.onreadystatechange = function (event) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(null, JSON.parse(xhr.responseText));
            } else {
                const error = new Error("Error" + urlApi);
                return callback(error, null);
            }
        }
    };

    xhr.send();
}

fetchData(`${API}/products`, function (productListError, productListData) {
    if (productListError) return console.error(productListError);

    fetchData(
        `${API}/products/${productListData[0].id}`,
        function (productError, productData) {
            if (productError) return console.error(productError);

            fetchData(
                `${API}/categories/${productData?.category?.id}`,
                function (categoryError, categoryData) {
                    if (categoryError) return console.error(categoryError);

                    console.log(productListData[0]);
                    console.log(productData.title);
                    console.log(categoryData.name);
                }
            );
        }
    );
});
