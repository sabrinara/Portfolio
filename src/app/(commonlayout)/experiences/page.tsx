import React from 'react';
import AllExperiences from './components/AllExperiences';
import ScrollToTheTop from '../shared/Scroll/ScrollToTheTop';

const ExperiencesPage = () => {
    return (
        <div className='mx-auto bg-background text-primary p-4 md:p-6 rounded-lg min-h-screen md:w-[1120px]'>
            <AllExperiences/>
            <ScrollToTheTop/>
        </div>
    );
};

export default ExperiencesPage;