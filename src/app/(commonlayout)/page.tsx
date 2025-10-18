"use client";

import { useState } from "react";
import Image from "next/image";
import { ModeToggle } from "./shared/ModeToggle";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import Navbar from "./shared/Navbar";
import WeatherWidget from "./shared/WeatherWidget";
import { Button } from "../../components/ui/button";
import ImageShimmer from "./components/ImageShimmer";

const HomeLayout = () => {
    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
        <div className="bg-background text-foreground p-6 rounded-lg min-h-screen">
            <WeatherWidget />
            <h1 className="text-primary text-2xl font-bold">Hello Shadcn + Tailwind v4</h1>
            <p>Custom color palette working perfectly!</p>

            <button className="bg-accent text-buttontext px-4 py-2 rounded mt-4">
                Click Me
            </button>

            <br /><br />
            <Navbar />

            <Button variant="secondary" className="text-buttontext">
                Click Me
            </Button>

            <ModeToggle />

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
            />



        </div>

    );
};

export default HomeLayout;
