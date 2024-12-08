"use client";
import React, { useEffect, useState } from 'react'
import Header from './Header';
import HeaderLoggedIn from './HeaderLoggedIn';

const HeaderWrapper = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem('username');
        setIsLoggedIn(!!username);
    }, [])

    return (
        <>
        {isLoggedIn ? <HeaderLoggedIn /> : <Header />}
        </>
    )
}

export default HeaderWrapper
