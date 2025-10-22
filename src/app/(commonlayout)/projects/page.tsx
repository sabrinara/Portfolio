import React from 'react';
import AllProjects from './components/AllProjects';

const AllProjectsPage = () => {
    return (
        <div className='mx-auto bg-background text-primary md:p-6 rounded-lg min-h-screen md:w-[1120px]'>
            <AllProjects/>
        </div>
    );
};

export default AllProjectsPage;