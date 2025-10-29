import React from 'react';
import AllAchievements from './components/AllAchievements';
import ScrollToTheTop from '../shared/Scroll/ScrollToTheTop';
import ScrollContact from '../shared/Scroll/ScrollContact';

const AllAchievementsPage = () => {
    return (
         <div className='mx-auto bg-background text-primary P-4 md:p-6 rounded-lg min-h-screen md:w-[1120px]'>
           <AllAchievements/>
           <ScrollContact/>
           <ScrollToTheTop/>
        </div>
    );
};

export default AllAchievementsPage;