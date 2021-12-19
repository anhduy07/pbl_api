/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';

const Cart = () => {
    return (
       <Layout>
           <main className="site-main main-container no-sidebar">
  <div className="container">
    <div className="row">
      <div className="main-content col-md-12">
        <div className="page-main-content">
          <div className="akasha">
            <div className="akasha-notices-wrapper" />
            <form className="akasha-cart-form">
              <table className="shop_table shop_table_responsive cart akasha-cart-form__contents" cellSpacing={0}>
                <thead>
                  <tr>
                    <th className="product-remove">&nbsp;</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="akasha-cart-form__cart-item cart_item">
                    <td className="product-remove">
                      <a href="#" className="remove" aria-label="Remove this item" data-product_id={27} data-product_sku="885B712">×</a></td>
                    <td className="product-thumbnail">
                      <a href="#"><img src="https://product.hstatic.net/200000201725/product/1281__3__ca3c0eb06acd4408ba02f2850450f6d1_grande.jpg" className="attachment-akasha_thumbnail size-akasha_thumbnail" alt="img" width={600} height={778} /></a></td>
                    <td className="product-name" data-title="Product">
                      <a href="#">Áo Khoác Jean Lót Lông 1281</a></td>
                    <td className="product-price" data-title="Price">
                      <span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>150.00</span></td>
                    <td className="product-quantity" data-title="Quantity">
                      <div className="quantity">
                        <span className="qty-label">Quantiy:</span>
                        <div className="control">
                          <a className="btn-number qtyminus quantity-minus" href="#">-</a>
                          <input type="text" defaultValue={1} title="Qty" className="input-qty input-text qty text" />
                          <a className="btn-number qtyplus quantity-plus" href="#">+</a>
                        </div>
                      </div>
                    </td>
                    <td className="product-subtotal" data-title="Total">
                      <span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>150.00</span></td>
                  </tr>
                </tbody>
              </table>
            </form>
            <div className="cart-collaterals">
              <div className="cart_totals ">
                <h2>Cart totals</h2>
                <table className="shop_table shop_table_responsive" cellSpacing={0}>
                  <tbody>
                    <tr className="cart-subtotal">
                      <th>Subtotal</th>
                      <td data-title="Subtotal"><span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>418.00</span></td>
                    </tr>
                    <tr className="order-total">
                      <th>Total</th>
                      <td data-title="Total"><strong><span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>418.00</span></strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="akasha-proceed-to-checkout">
                  <Link to="/checkout" className="checkout-button button alt akasha-forward">
                    Proceed to checkout</Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

       </Layout>
    );
};

export default Cart;