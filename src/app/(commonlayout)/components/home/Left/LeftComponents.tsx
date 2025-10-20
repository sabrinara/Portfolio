import React from 'react';
import Intro from './Intro/Intro';
import Navbar from '@/app/(commonlayout)/shared/MenuItems/Navbar';
import Social from './Social/Social';

const LeftComponents = () => {
    return (
        <div className='w-full'>
            <Intro/>
            <Navbar/>
            <Social/>
        </div>
    );
};

export default LeftComponents;