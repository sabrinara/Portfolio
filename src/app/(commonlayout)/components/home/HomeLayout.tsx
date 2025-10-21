import React from 'react';
import LeftComponents from './Left/LeftComponents';
import RightComponents from './Right/RightComponents';
import WeatherWidget from '../../shared/MenuItems/WeatherWidget';
import { ModeToggle } from '../../shared/MenuItems/ModeToggle';

const HomeLayout = () => {
    return (
        <div className='flex flex-col '>
            <div className='flex justify-end items-end gap-2 '>
                <WeatherWidget />
                <ModeToggle />
            </div>

            <div className="flex w-full justify-between gap-4 pt-[60px] md:pt-0">
                <div className="w-full md:w-1/3 sticky top-[60px] h-[calc(80vh-60px)]">
                    <LeftComponents />
                </div>

                <div className="w-full md:w-2/3 pt-2">
                    <RightComponents />
                </div>
            </div>
        </div>


    );
};

export default HomeLayout;
