import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { error, setError } = useState('');
    const { userLogin, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    //login with email & password
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/');
            })
            .catch(error => {
                setError(error)
                console.log(error)
            })


    }
    //login with google
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <section>
            <div className="hero bg-base-200">
                <div className="hero-content flex flex-col justify-between lg:flex-row-reverse">
                    <div className="text-center ms-0 md:ms-10 lg:text-left">
                        <img src="https://img.freepik.com/premium-vector/perfect-design-illustration-cloud-data-transfer_362714-1106.jpg" alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-xl me-10 bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-gradient-to-r from-teal-500 to-teal-900 text-white">Login</button>
                            </div>
                            <p className='text-center'><small>Have you no account? Please <Link to='/login' className='link text-teal-800'> Register</Link></small></p>
                        </form>
                        <button onClick={handleGoogleLogin} className='btn bg-gradient-to-r from-sky-500 to-sky-600 mb-5 mx-8 text-white'> <FaGoogle /> Continue with Google</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;