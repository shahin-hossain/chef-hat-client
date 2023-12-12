import React, { useContext, useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6'
import { LuChefHat } from 'react-icons/lu'
import { AuthContext } from '../../providers/AuthProvider';
import ActiveRoute from '../../routers/ActiveRoute';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [menuShow, setMenuShow] = useState(null);

    const { logOut, user, loading } = useContext(AuthContext);

    if (loading) {
        return;
    }

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('logged Out'))
            .catch(error => console.error(error))
    }

    const handleShowMenu = () => {

    }

    return (
        <div className='my-6 flex items-center justify-between '>

            <h2 className='text-teal-500 font-bold text-3xl md:text-5xl'> Chef <span className='text-teal-800'>Hat</span><span><LuChefHat className='inline mt-0 mb-5 text-5xl md:text-6xl' /></span></h2>
            <div onClick={() => setMenuShow(!menuShow)} className='md:hidden'>
                {
                    menuShow ? <IoClose className='text-2xl text-teal-800' /> : <FaBars className='text-2xl text-teal-800' />
                }
            </div>
            <div className={menuShow ? 'block absolute right-0 top-16 z-40 bg-white md:bg-inherit' : 'hidden md:block'} >
                <ul className='flex flex-col md:flex-row md:items-center'>
                    <li className='border-b-2 md:border-b-0'><ActiveRoute to='/' >Home</ActiveRoute></li>
                    <li className='border-b-2 md:border-b-0'><ActiveRoute to='/blog'>Blog</ActiveRoute></li>
                    {
                        user ? <>
                            {user.photoURL ? <div data-tip={user.displayName} className="tooltip tooltip-bottom border-b-2 md:border-b-0"><img src={user.photoURL} style={{ width: '50px', height: '50px' }} className='rounded-full inline me-3 tooltip' alt="user image" /></div> : <span><FaCircleUser className='text-5xl text-teal-500 inline me-3' /></span>}
                            <button onClick={handleLogOut} className='font-bold text-lg bg-gradient-to-r from-teal-500 to-teal-800 text-white py-1 px-5 rounded-lg me-3'>Logout</button>
                        </>
                            : <>
                                <li className='border-b-2 md:border-b-0'><ActiveRoute to='/login'>Login</ActiveRoute></li>
                                <li className='border-b-2 md:border-b-0'><ActiveRoute to='/register'>Register</ActiveRoute></li>
                                <li className='border-b-2 md:border-b-0'><span><FaCircleUser className='text-5xl text-teal-500 inline me-3' /></span></li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;