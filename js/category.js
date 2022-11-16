class Category {
    constructor () {
        this.apiURL = 'https://backend-bsale-production-992a.up.railway.app/'
    }

    getCategories () {
        $.ajax({
            type: 'GET',
            url: this.apiURL + 'category',
            success: function (data) {
                // console.log(data)
                $(data).each(function (index, category) {
                    $('.categories').append(
                        `<a class="dropdown-item" href="/category.html?category=${category.id}">${title(category.name)}</a>`
                    )
                })
            }
        })
    }

    getCategory(slug) {
        $.ajax({
            type: 'GET',
            url: this.apiURL + 'product/' + slug,
            success: function (data) {
                $(data).each (function (index, product) {
                    $('.products').append(
                        `<div class="col-md-3">
                            <a href="/product.html?id=${product.id}">
                                <img src="${product.url_image}" alt="Bebida Enegertica">
                            </a>
                            <h2>${product.name}</h2>
                            <p>$${product.price}</p>
                        </div>`
                    )
                })
            }
        })
    }
}