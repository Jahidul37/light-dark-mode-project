import React from 'react';
import { Outlet } from 'react-router-dom';
import NavHeader from '../Pages/Shared/NavHeader/NavHeader';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavHeader></NavHeader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;