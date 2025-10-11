import Image from "next/image";
import { ModeToggle } from "./shared/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="bg-background text-foreground p-6 rounded-lg">
      <h1 className="text-primary text-2xl font-bold">Hello Shadcn + Tailwind v4</h1>
      <p className="">Custom color palette working perfectly!</p>
      <button className="bg-accent text-buttontext px-4 py-2 rounded mt-4">
        Click Me
      </button>
      <br />
      <br />
      <Button variant="secondary" className="text-buttontext" >
        Click Me
      </Button>
<ModeToggle />
      <br />
      <br />
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
      
    </div>

  );
}
