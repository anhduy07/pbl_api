/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const InfoProduct = () => {
    return (
        <div className="main-contain-summary">
            <div className="contain-left has-gallery">
                <div className="single-left">
                    <div className="akasha-product-gallery akasha-product-gallery--with-images akasha-product-gallery--columns-4 images">
                        <a href="#" className="akasha-product-gallery__trigger">
                            <img draggable="false" className="emoji" alt="🔍" src="https://s.w.org/images/core/emoji/11/svg/1f50d.svg" /></a>
                        <div className="flex-viewport">
                            <figure className="akasha-product-gallery__wrapper">
                                <div className="akasha-product-gallery__image">
                                    <img alt="img" src="https://product.hstatic.net/200000201725/product/153c031a8bef4d45b4f43d46e7dcb9a4_beb8a27ec5b4488a9001b3ca473bc4fa_master.jpg" />
                                </div>
                            </figure>
                        </div>

                    </div>
                </div>
                <div className="summary entry-summary">
                    <div className="flash">
                        <span className="onnew"><span className="text">New</span></span></div>
                    <h1 className="product_title entry-title">Áo Khoác Jean OMBRE Collective 1242</h1>
                    <p className="price"><span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol"></span>249,000₫</span></p>
                    <div className="akasha-product-details__short-description">
                        <p>Áo được làm từ vải denim, loại vải thô, dày dặn, bền, được dệt đan chéo một cách chắc chắn bằng 100% vải cotton. Pha trộn với polyester nên việc bị co lại và nếp nhăn của áo được giảm thiểu tối đa.</p>
                    </div>
                    <form className="variations_form cart">
                        <div className="single_variation_wrap">
                            <div className="akasha-variation single_variation" />
                            <div className="akasha-variation-add-to-cart variations_button">
                                <div className="quantity">
                                    <span className="qty-label">Quantiy:</span>
                                    <div className="control">
                                        <a className="btn-number qtyminus quantity-minus" href="#">-</a>
                                        <input type="text" data-step={1} min={0} max name="quantity[25]" defaultValue={0} title="Qty" className="input-qty input-text qty text" size={4} pattern="[0-9]*" inputMode="numeric" />
                                        <a className="btn-number qtyplus quantity-plus" href="#">+</a>
                                    </div>
                                </div>
                                <button type="submit" className="single_add_to_cart_button button alt">Add to cart</button>
                            </div>
                        </div>
                    </form>

                    <div className="product_meta">
                        <div className="wcml-dropdown product wcml_currency_switcher">
                            <ul>
                                <li className="wcml-cs-active-currency">
                                    <a className="wcml-cs-item-toggle">USD</a>
                                    <ul className="wcml-cs-submenu">
                                        <li>
                                            <a>EUR</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <span className="sku_wrapper">SKU: <span className="sku">885B712</span></span>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default InfoProduct;