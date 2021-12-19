/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../store/cartContext';

const Iteam = () => {

    const {cart, setCart} = useContext(CartContext)

    return (
        <div className="product-item best-selling style-04 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-28 product type-product status-publish has-post-thumbnail product_cat-light product_cat-chair product_cat-sofas product_tag-light product_tag-sock  instock sale featured shipping-taxable purchasable product-type-simple">
            <div className="product-inner tooltip-top tooltip-all-top">
                <div className="product-thumb">
                    <Link className="thumb-link" to="/productDetail">
                        <img className="img-responsive" src="https://product.hstatic.net/200000201725/product/1501hc_38bcfadeaca44a258270688758b94a42_grande.jpg" alt="Classic Shirt" width={270} height={350} />
                    </Link>
                    <div className="flash">
                        <span className="onsale"><span className="number">-14%</span></span>
                        <span className="onnew"><span className="text">New</span></span></div>
                    <div className="group-button">
                        <div className="add-to-cart">
                            <a onClick={()=>setCart([...cart,{data:"face data"}])} className="button product_type_simple add_to_cart_button ajax_add_to_cart" style={{cursor: 'pointer'}}>
                                Add to cart</a>
                        </div>
                        <Link to="/productDetail" className="button yith-wcqv-button">Quick View</Link>
                        
                    </div>
                </div>
                <div className="product-info">
                    <h3 className="product-name product_title">
                        <Link to="/productDetail">Classic Shirt</Link>
                    </h3>
                    <span className="price"><del><span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>138.00</span></del> <ins><span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>119.00</span></ins></span>
                    <div className="rating-wapper ">
                        <div className="star-rating"><span style={{ width: '100%' }}>Rated <strong className="rating">5.00</strong> out of 5</span>
                        </div>
                        <span className="review">(1)</span></div>
                </div>
            </div>
        </div>
    );
};

export default Iteam;