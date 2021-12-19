/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const SideBar = () => {
    return (
        <div id="widget-area" className="widget-area shop-sidebar">
            <div id="akasha_product_search-2" className="widget akasha widget_product_search">
                <form className="akasha-product-search">
                    <input id="akasha-product-search-field-0" className="search-field" placeholder="Search products…"  name="s" type="search" />
                    <button type="submit" value="Search">Search</button>
                </form>
            </div>
            <div id="akasha_price_filter-2" className="widget akasha widget_price_filter"><h2 className="widgettitle">Filter By Price<span className="arrow" /></h2>
                <form method="get" action="#">
                    <div className="price_slider_wrapper">
                        <div data-label-reasult="Range:" data-min={0} data-max={1000} data-unit="$" className="price_slider" data-value-min={100} data-value-max={800}>
                        </div>
                        <div className="price_slider_amount">
                            <button type="submit" className="button">Filter</button>
                            <div className="price_label">
                                Price: <span className="from">$100</span> — <span className="to">$800</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
            <div id="akasha_product_categories-3" className="widget akasha widget_product_categories"><h2 className="widgettitle">Product categories<span className="arrow" /></h2>
                <ul className="product-categories">
                    <li className="cat-item cat-item-22"><a href="#">Shoes</a>
                        <span className="count">(11)</span></li>
                    <li className="cat-item cat-item-16"><a href="#">Accessories</a>
                        <span className="count">(9)</span></li>
                    <li className="cat-item cat-item-24"><a href="#">Bags</a>
                        <span className="count">(6)</span></li>
                    <li className="cat-item cat-item-27"><a href="#">Life style</a> <span className="count">(6)</span></li>
                    <li className="cat-item cat-item-19"><a href="#">New arrivals</a>
                        <span className="count">(7)</span></li>
                    <li className="cat-item cat-item-17"><a href="#">Summer Sale</a>
                        <span className="count">(6)</span></li>
                    <li className="cat-item cat-item-26"><a href="#">Specials</a> <span className="count">(4)</span></li>
                    <li className="cat-item cat-item-18"><a href="#">Women</a> <span className="count">(6)</span></li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;