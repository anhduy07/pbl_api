/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Background from '../components/Background';
import ItemList from '../components/ItemList';
import SideBar from '../components/SideBar';
import Layout from '../layouts/Layout';

const Category = () => {
    return (
        <Layout>
            <Background />
            <div className="main-container shop-page left-sidebar">
                <div className="container">
                    <div className="row">
                        <div className="main-content col-xl-9 col-lg-8 col-md-8 col-sm-12 has-sidebar">
                            <div className=" auto-clear equal-container better-height akasha-products">
                                <ul className="response-product product-list-grid row auto-clear equal-container better-height">
                                    <ItemList />
                                    <ItemList />
                                    <ItemList />
                                    <ItemList />
                                    <ItemList />
                                    <ItemList />
                                    <ItemList />
                                    <ItemList />
                                    <ItemList />
                                    
                                </ul>
                            </div>
                            <div className="shop-control shop-after-control">
                                <nav className="akasha-pagination">
                                    <span className="page-numbers current">1</span>
                                    <a className="page-numbers" href="#">2</a>
                                    <a className="next page-numbers" href="#">Next</a>
                                </nav>
                            </div>
                        </div>
                        <div className="sidebar col-xl-3 col-lg-4 col-md-4 col-sm-12">
                        <SideBar />
                            
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default Category;