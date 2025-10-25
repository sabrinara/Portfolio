import React from 'react';
import About from './About/About';
import Experiences from './Experiences/Experiences';

import Projects from './Projects/Projects';
import Achievement from './Achievement/Achievement';
import Skills from './Skills/Skills';
import Education from './Education/Education';

const RightComponents = () => {
    return (
        <div >
            <About />
            <Education />
            <Skills />
            <Experiences />
            <Projects />
            <Achievement />

        </div>
    );
};

export default RightComponents;