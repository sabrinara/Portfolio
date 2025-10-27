import React from 'react';
import AllProjects from './components/AllProjects';
import ScrollToTheTop from '../shared/Scroll/ScrollToTheTop';

const AllProjectsPage = () => {
    return (
        <div className='mx-auto bg-background text-primary p-4 md:p-6 rounded-lg min-h-screen md:w-[1120px]'>
            <AllProjects/>
            <ScrollToTheTop/>
        </div>
    );
};

export default AllProjectsPage;