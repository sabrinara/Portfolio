import React from 'react';
import AllExperiences from './components/AllExperiences';
import ScrollToTheTop from '../shared/Scroll/ScrollToTheTop';
import ScrollContact from '../shared/Scroll/ScrollContact';

const ExperiencesPage = () => {
    return (
        <div className='mx-auto bg-background text-primary p-4 md:p-6 rounded-lg min-h-screen lg:w-[1024px]'>
            <AllExperiences/>
            <ScrollContact/>
            <ScrollToTheTop/>
        </div>
    );
};

export default ExperiencesPage;