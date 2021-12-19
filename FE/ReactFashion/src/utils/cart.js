class Cart {


    getCart = () => {

        if (!JSON.parse(localStorage.getItem('cart')) || !Array.isArray(JSON.parse(localStorage.getItem('cart')))) {
            localStorage.setItem('cart', '[]')
        }

        return JSON.parse(localStorage.getItem('cart'))
    }

    setCart = (cart) => {
        return localStorage.setItem('cart', JSON.stringify(cart))
    }

}

export default new Cart()