import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext)
    const navLink = <>
        <li><NavLink to="/login">Log in</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/order">Orders</NavLink></li>
    </>

    const handleSignOut = () => {
        logOut()
        .then( result => {
            const user = result.user
        })
        .catch( error => {

        })
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><span className='text-cyan-500'>Firebase</span> Authentication</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                        <p>{user.email}</p>
                        <a onClick={handleSignOut} className="btn btn-sm">Sign Out</a>
                        </>:
                        <NavLink to="/login"><button className="btn">Log in</button></NavLink>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Header;