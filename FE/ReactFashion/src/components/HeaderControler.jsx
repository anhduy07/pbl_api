/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../store/cartContext';

const HeaderControler = () => {

    const [show, setShow] = useState(false)
    const { cart } = useContext(CartContext)

    return (
        <div className="header-control">
            <div className="header-control-inner">
                <div className="meta-dreaming">

                    <div className={show ? "header-search akasha-dropdown open" : "header-search akasha-dropdown"}>
                        <div className="header-search-inner" onClick={()=>setShow(!show)}>
                            <a href="#" className="link-dropdown block-link">
                                <span className="flaticon-magnifying-glass-1" />
                            </a>
                        </div>
                        <div className="block-search">
                            <form role="search" method="get" className="form-search block-search-form akasha-live-search-form">
                                <div className="form-content search-box results-search">
                                    <div className="inner">
                                        <input autoComplete="off" className="searchfield txt-livesearch input" name="s" placeholder="Search here..." type="text" />
                                    </div>
                                </div>
                                <input name="post_type" defaultValue="product" type="hidden" />
                                <input name="taxonomy" defaultValue="product_cat" type="hidden" />
                                <button type="submit" className="btn-submit">
                                    <span className="flaticon-magnifying-glass-1" />
                                </button>
                            </form>{/* block search */}
                        </div>
                    </div>
                    <div className="akasha-dropdown-close" onClick={()=>setShow(!show)}>x</div>
                    <div className="menu-item block-user block-dreaming akasha-dropdown">
                        <Link className="block-link" to="/auth">
                            <span className="flaticon-profile" />
                        </Link>

                    </div>
                    <div className="block-minicart block-dreaming akasha-mini-cart akasha-dropdown">
                        <div className="shopcart-dropdown block-cart-link" data-akasha="akasha-dropdown">
                            <Link className="block-link link-dropdown" to="/cart">
                                <span className="flaticon-bag" />
                                <span className="count">{cart.length}</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderControler;