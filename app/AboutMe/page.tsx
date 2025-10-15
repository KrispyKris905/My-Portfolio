import { ThemeSwitcher } from "@/components/theme-switcher";
import { aboutMeContent } from "./content";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>My Portfolio</Link>
            </div>
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <div className="flex-1 flex flex-col gap-6 px-4">
            <section>
              <h2 className="section-title">{aboutMeContent.title}</h2>
              <p className="about-text">{aboutMeContent.bio}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}