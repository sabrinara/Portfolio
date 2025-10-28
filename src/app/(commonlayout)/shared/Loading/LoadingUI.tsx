import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import React from 'react';

const LoadingUI = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <Button variant="outline" disabled size="lg">
                <Spinner className="size-8" />
              <span className='text-text'>  Loading....</span>
            </Button>
        </div>
    );
};

export default LoadingUI;