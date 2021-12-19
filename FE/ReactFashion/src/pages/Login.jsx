/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Background from '../components/Background';
import Layout from '../layouts/Layout';

const Login = () => {
    return (
        <Layout>
            {/* <Background /> */}
            <main className="site-main  main-container no-sidebar">
                <div className="container">
                    <div className="row">
                        <div className="main-content col-md-12">
                            <div className="page-main-content">
                                <div className="akasha">
                                    <div className="akasha-notices-wrapper" />
                                    <div className="u-columns col2-set" id="customer_login">
                                        <div className="u-column1 col-1">
                                            <h2>Login</h2>
                                            <form className="akasha-form akasha-form-login login" method="post">
                                                <p className="akasha-form-row akasha-form-row--wide form-row form-row-wide">
                                                    <label htmlFor="username">Username or email adchair&nbsp;<span className="required">*</span></label>
                                                    <input type="text" className="akasha-Input akasha-Input--text input-text" name="username" id="username" autoComplete="username" defaultValue /></p>
                                                <p className="akasha-form-row akasha-form-row--wide form-row form-row-wide">
                                                    <label htmlFor="password">Password&nbsp;<span className="required">*</span></label>
                                                    <input className="akasha-Input akasha-Input--text input-text" type="password" name="password" id="password" autoComplete="current-password" />
                                                </p>
                                                <p className="form-row">
                                                    <input type="hidden" id="akasha-login-nonce" name="akasha-login-nonce" defaultValue="832993cb93" /><input type="hidden" name="_wp_http_referer" defaultValue="/akasha/my-account/" />
                                                    <button type="submit" className="akasha-Button button" name="login" value="Log in">Log in
                                                    </button>
                                                    <label className="akasha-form__label akasha-form__label-for-checkbox inline">
                                                        <input className="akasha-form__input akasha-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" />
                                                        <span>Remember me</span>
                                                    </label>
                                                </p>
                                                <p className="akasha-LostPassword lost_password">
                                                    <a href="my-account.htmllost-password/index.html">Lost your
                                                        password?</a>
                                                </p>
                                            </form>
                                        </div>
                                        <div className="u-column2 col-2">
                                            <h2>Register</h2>
                                            <form method="post" className="akasha-form akasha-form-register register">
                                                <p className="akasha-form-row akasha-form-row--wide form-row form-row-wide">
                                                    <label htmlFor="reg_email">Email adchair&nbsp;<span className="required">*</span></label>
                                                    <input type="email" className="akasha-Input akasha-Input--text input-text" name="email" id="reg_email" autoComplete="email" defaultValue /></p>
                                                <div className="akasha-privacy-policy-text"><p>Your personal data will be used to
                                                    support your experience throughout this website, to manage access to your
                                                    account, and for other purposes described in our <a href="#" className="akasha-privacy-policy-link" target="_blank">privacy policy</a>.</p>
                                                </div>
                                                <p className="akasha-FormRow form-row">
                                                    <input type="hidden" id="akasha-register-nonce" name="akasha-register-nonce" defaultValue="45fae70a87" /><input type="hidden" name="_wp_http_referer" defaultValue="/akasha/my-account/" />
                                                    <button type="submit" className="akasha-Button button" name="register" value="Register">Register
                                                    </button>
                                                </p>
                                            </form>
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

export default Login;