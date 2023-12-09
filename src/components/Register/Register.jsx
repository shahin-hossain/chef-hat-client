import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');

    const { userRegister, setUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            return setError('Confirm did not match')
        }

        userRegister(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setUserProfile(name, photoURL)
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <section>
            <div className="hero bg-base-200 mb-10">
                <div className="hero-content flex flex-col justify-between lg:flex-row-reverse">
                    <div className="text-center ms-0 md:ms-10 lg:text-left">
                        <img src="https://img.freepik.com/premium-vector/perfect-design-illustration-cloud-data-transfer_362714-1106.jpg" alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-xl me-10 bg-base-100 mb-5">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Enter URL" name='photo' className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirm password" name='confirm' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer label">
                                    <input type="checkbox" className="checkbox" />
                                    <span className="label-text">Agree to <Link to='/terms' className='link link-info'>Terms & Condition</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-gradient-to-r from-teal-500 to-teal-900 text-white">Register</button>
                            </div>
                            <p className='text-center'><small>Already have an account? <Link to='/login' className='link text-teal-800'>login</Link></small></p>
                            <p className='text-center text-red-500'>{error}</p>
                        </form>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Register;