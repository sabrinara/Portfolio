import Image from "next/image";
import { ModeToggle } from "./shared/ModeToggle";

export default function Home() {
  return (
  <div className="bg-background text-foreground p-6 rounded-lg">
  <h1 className="text-primary text-2xl font-bold">Hello Shadcn + Tailwind v4</h1>
  <p className="text-secondary">Custom color palette working perfectly!</p>
  <button className="bg-accent text-background px-4 py-2 rounded mt-4">
    Click Me
  </button>
  <ModeToggle/>
</div>

  );
}
