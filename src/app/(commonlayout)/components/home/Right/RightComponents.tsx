import React from 'react';
import About from './About/About';
import Experiences from './Experiences/Experiences';
import WeatherWidget from '@/app/(commonlayout)/shared/MenuItems/WeatherWidget';
import { ModeToggle } from '@/app/(commonlayout)/shared/MenuItems/ModeToggle';
import Projects from './Projects/Projects';

const RightComponents = () => {
    return (
        <div >
            <About />
            <Experiences />
            <Projects />
        </div>
    );
};

export default RightComponents;