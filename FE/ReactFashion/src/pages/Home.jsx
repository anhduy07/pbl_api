/* eslint-disable jsx-a11y/anchor-is-valid */
import Background from '../components/Background';
import Instargrams from '../components/Instargrams';
import Iteam from '../components/Item';
import Silce from '../components/Silce';
import Layout from '../layouts/Layout';

const Home = () => {
    // const Slice = require('../components/Silce')
    return (
        <Layout >
            <div className="fullwidth-template">
                <Background/>

                <div className="section-001">
                    <div className="container">
                        <div className="akasha-heading style-01">
                            <div className="heading-inner">
                                <h3 className="title">
                                    FLASH SALE </h3>
                            </div>
                        </div>
                        <div className="akasha-products style-04">
                            <div className="response-product product-list-grid row auto-clear equal-container better-height ">
                                <Iteam />
                                <Iteam />
                                <Iteam />
                                <Iteam />
                            </div>

                        </div>
                    </div>
                    <div className="container">
                        <div className="akasha-heading style-01">
                            <div className="heading-inner">
                                <h3 className="title">
                                    Hot Trend </h3>
                            </div>
                        </div>
                        <div className="akasha-products style-04">
                            <div className="response-product product-list-grid row auto-clear equal-container better-height ">
                                <Iteam />
                                <Iteam />
                                <Iteam />
                                <Iteam />
                            </div>
                            {/* OWL Products */}
                            <div className="shop-all">
                                <a target=" _blank" href="#">Discovery All</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Instargrams /> */}
            </div>
        </Layout>
    );
};

export default Home;