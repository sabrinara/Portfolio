import React from 'react';
import Intro from './Intro/Intro';
import Navbar from '@/app/(commonlayout)/shared/MenuItems/Navbar';

const LeftComponents = () => {
    return (
        <div className='w-full'>
            <Intro/>
            <Navbar/>
        </div>
    );
};

export default LeftComponents;