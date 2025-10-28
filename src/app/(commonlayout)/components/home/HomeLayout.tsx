import React from 'react';
import LeftComponents from './Left/LeftComponents';
import RightComponents from './Right/RightComponents';
import WeatherWidget from '../../shared/MenuItems/WeatherWidget';
import { ModeToggle } from '../../shared/MenuItems/ModeToggle';
import MobileNavbar from '../../shared/MenuItems/MobileNavbar';
import TimeGreeting from '../../shared/MenuItems/TimeGreeting';


const HomeLayout = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex md:hidden sticky top-0'>
                <MobileNavbar/>
            </div>
            <div className='hidden md:flex justify-end items-center gap-2 '>
                <TimeGreeting/>
                <WeatherWidget />
                <ModeToggle />
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between gap-4 pt-20 md:pt-0 px-6 md:px-0">
                <div className="w-full md:w-1/3 md:sticky md:top-[60px] md:h-[calc(80vh-60px)]">
                    <LeftComponents />
                </div>

                <div className="w-full md:w-2/3 pt-4 md:pt-2">
                    <RightComponents />
                </div>
            </div>
        </div>


    );
};

export default HomeLayout;
