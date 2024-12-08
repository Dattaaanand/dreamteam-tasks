import React, {useState, useEffect} from 'react'
import '../app/globals.css'
import Header from './header/HeaderWrapper';
import Footer from './footer/Footer'

function MyApp({Component, pageProps}){
  return (
    <>
        <Header/>
        <main>
            <Component {...pageProps} />
        </main>
        <Footer/>
    </>
  )
}

export default MyApp;
