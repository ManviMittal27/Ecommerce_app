var productparse = JSON.parse(localStorage.getItem("allItems"));
console.log(productparse);

var currentPage = 1;
var productsPerPage = 5;
var totalProducts = productparse.length;

function viewMore() {
    var startIndex = (currentPage - 1) * productsPerPage;
    var endIndex = startIndex + productsPerPage;

    if (productparse && productparse.length && startIndex < totalProducts) {
        var currentProducts = productparse.slice(startIndex, endIndex);
        displayProducts(currentProducts);
        currentPage++;
    } else {
        alert("No more products to display!");
    }
}

function displayProducts(products) {
    var productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = "";

    products.forEach(function (product) {
        var row = document.createElement("tr");
        var data1 = document.createElement("td");
        var data2 = document.createElement("td");
        var data3 = document.createElement("td");
        var data4 = document.createElement("td");
        var data5 = document.createElement("td");
        var data6 = document.createElement("td");
        var addbutton = document.createElement("button");
        addbutton.innerText = "ADD TO CART";

        data1.innerText = product.id;

        data2.innerHTML = `<img src="apple.jpg" style="width:60px;height:40px">`;

        data3.innerText = product.name;
        data4.innerText = product.quantity;
        data5.innerText = product.price;
        data6.append(addbutton);
        row.append(data1, data2, data3, data4, data5, data6);
        productContainer.append(row);

        addbutton.onclick = function () {
            var loguser = JSON.parse(localStorage.getItem("logdata"));
            if (loguser.length == 0) window.location.href = "login.html";
            else {
                addToCart(product);
            }
        }
    });
}

function viewCart(){
    window.location.href = "AddToCart.html";
}

function addToCart(product) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function signout() {
    var logdata = JSON.parse(localStorage.getItem("logdata"));
    logdata.splice(0, 1);
    localStorage.setItem("logdata", JSON.stringify(logdata));
}

function emptycart() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));
    cartItems.splice(0, 20);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

viewMore();