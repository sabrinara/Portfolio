import React from 'react';
import About from './About/About';
import Experiences from './Experiences/Experiences';

import Projects from './Projects/Projects';
import Achievement from './Achievement/Achievement';

const RightComponents = () => {
    return (
        <div >
            <About />
            <Experiences />
            <Projects />
            <Achievement/>
        </div>
    );
};

export default RightComponents;