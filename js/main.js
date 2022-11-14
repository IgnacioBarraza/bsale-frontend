$.get('/template/header.html', function(data){
    $("#header").replaceWith(data)
})

$.get('/template/footer.html', function(data){
    $("#footer").replaceWith(data)
})

$(function () {
    loadScript('js/category.js', categorySetup);
    loadScript('js/product.js', productsSetup);
})

var categorySetup = function () {
    let categories = new Category()
    categories.getCategories()
    if (urlParam("category")) {
        categories.getCategory(decodeURIComponent(urlParam("category")))
    }
}

var productsSetup = function () {
    let products = new Products()
    products.getProducto(idParam("id"))
}

function loadScript (url, callback) {
    var head = document.head
    var script = document.createElement("script")
    script.type = "text/javascript"
    script.src = url
    script.onreadystatechange = callback
    script.onload = callback
    head.appendChild(script)
}

function title(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase()
    })
}

function urlParam(category) {
    var result = new RegExp("[?&]" + category + "=([^&#]*)").exec(
        window.location.href
        );
    if (result == null) {
        return null;
    } else {
        return result[1] || 0;
    }
}

function idParam(id) {
    var result = new RegExp("[?&]" + id + "=([^&#]*)").exec(
        window.location.href);
    if (result == null) {
        return null
    } else {
        return result[1] || 0
    }
}