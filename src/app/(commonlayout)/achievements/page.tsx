import React from 'react';
import AllAchievements from './components/AllAchievements';

const AllAchievementsPage = () => {
    return (
         <div className='mx-auto bg-background text-primary md:p-6 rounded-lg min-h-screen md:w-[1120px]'>
           <AllAchievements/>
        </div>
    );
};

export default AllAchievementsPage;