import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6'
import { LuChefHat } from 'react-icons/lu'
import { AuthContext } from '../../providers/AuthProvider';
const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('logged Out'))
            .catch(error => console.error(error))
    }


    return (
        <div className='my-6 flex items-center justify-between '>
            <h2 className='text-teal-500 font-bold text-5xl'> Chef <span className='text-teal-800'>Hat</span><span><LuChefHat className='inline mt-0 mb-5 text-6xl' /></span></h2>
            <div>
                <Link to='/'><span className='font-bold text-lg text-teal-800 me-3'>Home</span></Link>
                <Link to='/blog'><span className='font-bold text-lg text-teal-800 me-3'>Blog</span></Link>

                {
                    user ? <>
                        {user.photoURL ? <div data-tip={user.displayName} className="tooltip tooltip-bottom"><img src={user.photoURL} style={{ width: '50px' }} className='rounded-full inline me-3 tooltip' alt="user image" /></div> : <span><FaCircleUser className='text-5xl text-teal-500 inline me-3' /></span>}
                        <button onClick={handleLogOut} className='font-bold text-lg bg-gradient-to-r from-teal-500 to-teal-800 text-white py-1 px-5 rounded-lg me-3'>Logout</button>
                    </>
                        : <>
                            <Link to='/login'><span className='font-bold text-lg text-teal-800 me-3'>Login</span></Link>
                            <Link to='/register'><span className='font-bold text-lg text-teal-800 me-3'>Register</span></Link>
                            <span><FaCircleUser className='text-5xl text-teal-500 inline me-3' /></span>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;