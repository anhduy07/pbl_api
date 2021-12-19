import React from 'react';
import Layout from '../layouts/Layout';

const Checkout = () => {
    return (
        <Layout>
            <main className="site-main  main-container no-sidebar">
                <div className="container">
                    <div className="row">
                        <div className="main-content col-md-12">
                            <div className="page-main-content">
                                <div className="akasha">
                                    <div className="akasha-notices-wrapper" />

                                    <form name="checkout" method="post" className="checkout akasha-checkout" action="#" encType="multipart/form-data" noValidate="novalidate">
                                        <div className="col2-set" id="customer_details">
                                            <div className="col-1">
                                                <div className="akasha-billing-fields">
                                                    <h3>Chi tiết hóa đơn</h3>
                                                    <div className="akasha-billing-fields__field-wrapper">


                                                        <p className="form-row form-row-wide"  >
                                                            <label htmlFor="billing_company">
                                                                Tên
                                                            </label>
                                                            <span className="akasha-input-wrapper">
                                                                <input type="text" className="input-text " placeholder="Tên"  />
                                                            </span>
                                                        </p>
                                                        <p className="form-row form-row-wide"  >
                                                            <label htmlFor="billing_company">
                                                                Địa chỉ
                                                            </label>
                                                            <span className="akasha-input-wrapper">
                                                                <input type="text" className="input-text " placeholder="Địa chỉ"  />
                                                            </span>
                                                        </p>
                                                        <p className="form-row form-row-wide"  >
                                                            <label htmlFor="billing_company">
                                                                Số điện thoại
                                                            </label>
                                                            <span className="akasha-input-wrapper">
                                                                <input type="text" className="input-text " placeholder="Số điện thoại"  />
                                                            </span>
                                                        </p>
                                                        <p className="form-row form-row-wide"  >
                                                            <label htmlFor="billing_company">
                                                                Gmail
                                                            </label>
                                                            <span className="akasha-input-wrapper">
                                                                <input type="text" className="input-text " placeholder="gmail"  />
                                                            </span>
                                                        </p>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-2">
                                                <div className="akasha-shipping-fields">
                                                </div>
                                                <div className="akasha-additional-fields">
                                                    <h3>Thông tin thêm</h3>
                                                    <div className="akasha-additional-fields__field-wrapper">
                                                        <p className="form-row notes" id="order_comments_field" data-priority>
                                                            <span className="akasha-input-wrapper">
                                                                <textarea name="order_comments" className="input-text " id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows={2} cols={5} />
                                                            </span>
                                                        </p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 id="order_review_heading">ĐƠN HÀNG CỦA BẠN</h3>
                                        <div id="order_review" className="akasha-checkout-review-order">
                                            <table className="shop_table akasha-checkout-review-order-table">
                                                <thead>
                                                    <tr>
                                                        <th className="product-name">Sản phẩm</th>
                                                        <th className="product-total">Tổng số</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="cart_item">
                                                        <td className="product-name">
                                                            T-shirt with skirt – Pink&nbsp;&nbsp; <strong className="product-quantity">×
                                                                1</strong></td>
                                                        <td className="product-total">
                                                            <span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>150.00</span></td>
                                                    </tr>
                                                    <tr className="cart_item">
                                                        <td className="product-name">
                                                            Abstract Sweatshirt&nbsp;&nbsp; <strong className="product-quantity">× 1</strong>
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>129.00</span></td>
                                                    </tr>
                                                    <tr className="cart_item">
                                                        <td className="product-name">
                                                            Mini Dress&nbsp;&nbsp; <strong className="product-quantity">×
                                                                1</strong></td>
                                                        <td className="product-total">
                                                            <span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>139.00</span></td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>

                                                    <tr className="order-total">
                                                        <th>Tổng</th>
                                                        <td><strong><span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>418.00</span></strong>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                            <button type="submit" class="button alt" id="place_order" >Đặt hàng</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </Layout>
    );
};

export default Checkout;