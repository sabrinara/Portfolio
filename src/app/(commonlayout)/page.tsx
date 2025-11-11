"use client";

import { useState } from "react";
import Image from "next/image";

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";

import { Button } from "../../components/ui/button";
import ImageShimmer from "./components/ImageShimmer";
import LeftComponents from "./components/home/Left/LeftComponents";
import RightComponents from "./components/home/Right/RightComponents";
import HomeLayout from "./components/home/HomeLayout";
import ScrollToTheTop from "./shared/Scroll/ScrollToTheTop";
import ScrollContact from "./shared/Scroll/ScrollContact";

const RootLayout = () => {
    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
        <div className="mx-auto bg-background text-primary md:py-6 rounded-lg min-h-screen lg:w-[1024px]">
            <HomeLayout />
            <ScrollContact />
            <ScrollToTheTop />
            {/* <h1 className="text-primary text-2xl font-bold">Hello Shadcn + Tailwind v4</h1>
            <p>Custom color palette working perfectly!</p>

            <button className="bg-accent text-buttontext px-4 py-2 rounded mt-4">
                Click Me
            </button>

            <br /><br />
           

            <Button variant="secondary" className="text-buttontext">
                Click Me
            </Button>

    

            <br /><br />
           
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                    <CardAction>Card Action</CardAction>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>

            <ImageShimmer
                src="/sr.png"
                alt="Shimmer effect"
                width={700}
                height={475}
                className="rounded-lg object-cover"
            /> */}

        </div>

    );
};

export default RootLayout;
