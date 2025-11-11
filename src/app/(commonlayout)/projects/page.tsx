import React from 'react';
import AllProjects from './components/AllProjects';
import ScrollToTheTop from '../shared/Scroll/ScrollToTheTop';
import ScrollContact from '../shared/Scroll/ScrollContact';

const AllProjectsPage = () => {
    return (
        <div className='mx-auto bg-background text-primary p-4 md:p-6 rounded-lg min-h-screen lg:w-[1024px]'>
            <AllProjects/>
            <ScrollContact/>
            <ScrollToTheTop/>
        </div>
    );
};

export default AllProjectsPage;