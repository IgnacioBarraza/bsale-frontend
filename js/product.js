class Products {
    constructor() {
        this.apiURL = 'https://backend-bsale-production-992a.up.railway.app/'
    }

    getProducto (id) {
        $.ajax({
            type: 'GET',
            url: this.apiURL + 'product/id/' + id,
            success: function (data) {
                console.log(data)
                $(data).each (function (index, product) {
                    $('.imagen-producto').html('<img src="' + product.url_image + '" class="img">')
                    $('.nombre-producto').html('<h3>'+product.name + '</h3>')
                    $('.precio-producto').html('Precio: $' + product.price)
                    $('.descuento-producto').html('Descuento: ' + product.discount + '%')
                })
            }
        })
    }
}