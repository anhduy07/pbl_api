import React from 'react';

const Login = () => {
    return (
        <div className="bg-primary">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container-xl px-4">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    {/* Basic login form*/}
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header justify-content-center"><h3 className="fw-light my-4">Login</h3></div>
                                        <div className="card-body">
                                            {/* Login form*/}
                                            <form>
                                                {/* Form Group (email address)*/}
                                                <div className="mb-3">
                                                    <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                                                    <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter email address" />
                                                </div>
                                                {/* Form Group (password)*/}
                                                <div className="mb-3">
                                                    <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                                    <input className="form-control" id="inputPassword" type="password" placeholder="Enter password" />
                                                </div>
                                                {/* Form Group (remember password checkbox)*/}
                                                <div className="mb-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input" id="rememberPasswordCheck" type="checkbox" defaultValue />
                                                        <label className="form-check-label" htmlFor="rememberPasswordCheck">Remember password</label>
                                                    </div>
                                                </div>
                                                {/* Form Group (login box)*/}
                                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <a className="small" href="auth-password-basic.html">Forgot Password?</a>
                                                    <a className="btn btn-primary" href="dashboard-1.html">Login</a>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center">
                                            <div className="small"><a href="auth-register-basic.html">Need an account? Sign up!</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer className="footer-admin mt-auto footer-dark">
                        <div className="container-xl px-4">
                            <div className="row">
                                <div className="col-md-6 small">Copyright © TTH</div>
                                <div className="col-md-6 text-md-end small">
                                    <a href="#!">Admin </a>
                                    ·
                                    <a href="#!"> Vitra &amp; Travel</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Login;