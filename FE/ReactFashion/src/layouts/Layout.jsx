import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideBarMobile from '../components/SideBarMobile';
import { CartContext } from '../store/cartContext';
import cartLocal from '../utils/cart';
import { Load } from '../utils/load';

const Layout = ({ children }) => {

    const [cart, setCart] = useState(cartLocal.getCart())

    useEffect(() => {
        Load()
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        cartLocal.setCart(cart)
    }, [cart])

    return (
        <CartContext.Provider value={{cart, setCart}}>
            <div style={{ marginTop: '100px' }}>
                <SideBarMobile />
                <Header />
                {
                    children
                }
                <Footer />
            </div>
        </CartContext.Provider>
    );
};

export default Layout;